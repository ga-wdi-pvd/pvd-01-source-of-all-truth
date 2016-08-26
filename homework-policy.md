# Homework

- Homework will take more time for some, and less time for others. It is up to you how you want to partition your time for a given exercise.

- Turn in **something**. Turning in an incomplete assignment is **infinitely** better than turning in nothing at all. We can't get you the help you need unless we see what you're working on. That said...

- **Late homework will not be accepted**. If you have issues submitting homework please let us know.

- You can track your homework completion rate in [Garnet](http://garnet.wdidc.org).

- Each assignment will ask you to learn or research something that has explicitly not been covered in class. Learning how to learn is fundamental to becoming a successful developer.

## Due Dates and Grading

- You will generally be assigned homework every day. Due dates can be found in the [class schedule](https://ga-dc.github.io/wdi12).

- Unless otherwise directed, each assignment should be forked and cloned from a `ga-wdi-exercises` repository, and submitted as a pull request to the original `ga-wdi-exercises` repository from your fork. For more information on pull requests, see below.

- Homework is graded only on **meaningful progress**. That is: that you made an effort to complete it, regardless of whether you were successful.

- Plagiarized homework will not be accepted.

> Concerned about what is considered plagiarism? Consult an instructor.

- Assignments are graded on whether or not you seem to have made a meaningful effort to do them. There are three possible grades for each assignment:
  - **Complete:** something was turned in, and meaningful effort was made.
  - **Incomplete:** something was turned in, but meaningful effort was not made: the submission is blank, or it was blatantly copied wholesale from somewhere.
  - **Missing:** nothing was turned in.

- **We rely on homework to know where you're at.** It's very much to your advantage to turn in your homework the day it's assigned, even if -- *especially* if -- you're not able to finish it. Then we can address concerns before the unit continues and keep you from falling behind. If you wait until Thursday to turn everything in, you will have missed valuable opportunities to get on-track. We provide this flexibility to account for extenuating circumstances.

- Feedback will not be given on assignments by an instructor unless you specifically request it. Requests for feedback, however, are encouraged. [See below for more details](#in-order-to-get-feedback-on-your-assignment).

## What to include with your submission

On **every submission** -- that is, on every pull request (or, sometimes, issue) -- please include:
- **Comfort score**, out of 5
- **Completeness score**, out of 5

### In order to get feedback on your assignment...

...when submitting your pull request or issue, please...

- Ask specific questions, **ending them with a question mark**. We receive *lots* of assignments, and we rely on questions marks to provide a visual cue that we should stop and address something!

  For example:

  > Any thoughts as to why the method on line 49 kept returning 'NaN'?

## The Submission Process

All homework assignments will have their own Github repository, under the `ga-wdi-exercises` account.

1. Please **fork** new assignments.
2. Then, **clone** your fork to your computer.
3. Create a feature branch in the format of `yourname_solution`.
4. Complete your work inside it.
5. Then, **push** your completed work to your forked repository.
6. Finally, make a **pull request** to the upstream repository (in `ga-wdi-exercises`).

For example, the sequence of commands you might follow to complete the above process is:

```
# Click grey 'Fork' button on Github
js1989: ~/wdi $ git clone git@github.com:js1989/homeworkaroo.git
js1989: ~/wdi/homeworkaroo $ cd homeworkaroo
js1989: ~/wdi/homeworkaroo (master) $ git checkout -b johnsmith_solution
js1989: ~/wdi/homeworkaroo (johnsmith_solution) $ touch did_my_homework.txt
js1989: ~/wdi/homeworkaroo (johnsmith_solution *) $ git add did_my_homework.txt
js1989: ~/wdi/homeworkaroo (johnsmith_solution +) $ git commit -m "Added did_hw file. All done"
js1989: ~/wdi/homeworkaroo (johnsmith_solution) $ git push origin johnsmith_solution
# Click green 'New pull request' button on Github
# Click green 'Create pull request' button
# Click the new 'Create pull request' button
```

### If you have errors...

...please refer to [this readme](https://github.com/ga-wdi-lessons/git-review) for instructions on common Git errors.
