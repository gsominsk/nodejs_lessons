# TESTS

## Types

![alt text](public/tests_8.jpg)

## Mike Cohn`s pyramid

![alt text](public/tests_2.png)

## Why? How? 

![alt text](public/tests_1.png)

## Complex view of our app

![alt text](public/tests_3.png)

## More complex view of our app

![alt text](public/tests_4.png)

## Unit tests view

![alt text](public/tests_5.png)

## Integration tests view

![alt text](public/tests_6.png)

## User interface tests view

![alt text](public/tests_7.png)


## Mocha life hook process
```
|
spawn child process
|
|--------------> inside child process
  process and apply options
  |
  run spec file/s
  |
  |--------------> per spec file
    suite callbacks (e.g., 'describe')
    |
    'before' root-level pre-hook
    |
    'before' pre-hook
    |
    |--------------> per test
      'beforeEach' root-level pre-hook
      |
      'beforeEach' pre-hook
      |
      test callbacks (e.g., 'it')
      |
      'afterEach' post-hook
      |
      'afterEach' root-level post-hook
    |<-------------- per test end
    |
    'after' post-hook
    |
    'after' root-level post-hooks
  |<-------------- per spec file end
|<-------------- inside child process end
```