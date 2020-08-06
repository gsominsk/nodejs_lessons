const task = {
    getAll: async (_, { mongoDb }) => {
        const { Tasks: taskModel } = mongoDb;
        const tasks = await taskModel.find().populate('userId');
        return {
            status: 'ok',
            tasks
        };
    },

    create: async (data, { mongoDb }) => {
        const {
            Tasks: taskModel,
            Users: userModel,
        } = mongoDb;
        const { userId, title, message } = data;

        const user = await userModel.findById(userId);

        const task = new taskModel({
            title,
            message,
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