const task = {
    getAll: async (_, { mongoDb }) => {
        const { Tasks: taskModel } = mongoDb;
        const tasks = await taskModel.find().populate('userId');
        const count = await taskModel.count({ message: 'new task' });
        const distinct = await taskModel.distinct('title');
        const aggregate = await taskModel.aggregate([
            { $match: { title: { $in: ['part_1']} } },
            { $group: { _id: '$finished', spendedTime: { $sum: '$spendedTime' }}}
        ]);

        const lookup = await taskModel.aggregate([
            {
                $lookup: {
                    from: 'users',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'user'
                },
            },
        ]);

        return {
            status: 'ok',
            lookup,
            tasks
        };
    },

    create: async (data, { mongoDb }) => {
        const {
            Tasks: taskModel,
            Users: userModel,
        } = mongoDb;
        const { userId, title, message, spendedTime, finished } = data;

        const user = await userModel.findById(userId);

        const task = new taskModel({
            title,
            message,
            spendedTime,
            finished,
            userId: user._id
        });

        await user.tasks.push(task);
        await user.save();

        await task.save();

        return ({
            status: 'ok',
            task,
        });
    },
};

module.exports = task;