# TutorWiz

[![Build Status](https://travis-ci.com/brianzhangmz/TutorWiz.svg?token=iQqR4Y7Epud1QBr2kgKt&branch=master)](https://travis-ci.com/brianzhangmz/TutorWiz)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

## Project Description

Project #66: TutorWiz – A Tutor Allocation Tool
Tutorials are an essential component of university teaching. Most tutorials are given by students employed as tutors. Allocating students to courses is non-trivial since all courses should be covered by the most suitable applicant, while at the same time tutor preferences (preferred courses, workload) and time table constraints should be considered. Furthermore other objectives, such as providing funding for PhD students, providing continuity (tutors should ideally tutor the same course several years in a row), and generating an appropriate workload.

In this project you will develop a web-based application which:

```
(a) Enables students to apply for a tutor position and specify preferences and restrictions

(b) Enables course supervisors to provide requirements (e.g. number of tutors, type of number of tutorials)

(c) Generates an optimal allocation of tutors to courses subject to constraints and requirements.
```

Ideally constraints should be obtained using existing university services, such as course and timetabling information, and previous years’ tutor allocations.

Outcome:

```
1. Analysis of existing tools used for tutor allocation or similar applications assigning people to tasks/jobs.

2. Requirement analysis and technology evaluation to select the most suitable development tools

3. Analysis of algorithms to generate “optimal” allocations

4. Design and implementation of a prototype of a tool for simplifying the tutor application, selection, and allocation process.

5. User evaluation (both student and course coordinator interface)

6. Evaluation of effectiveness (to what degree is the resulting assignment “optimal”?)
```

## Project Analysis

### Requriments

The following requriments have to be satisfied.

```
This system can be used by students and school staffs
Stuents can apply for tutor position with preferences
Lecturers can post courses and tutorial sessions
Courses manager can generate the allocation sheet
```

### Constraints

The following constraints have to be satisfied.

```
A tutor can only be allocated to course session when they are free.
A tutor can only work on 1 course session at a time.
If a tutor is allocated to a session stream, they have to work on every week that stream runs, at the time of that stream. For example, if course session 1 runs from 8:00 to 10:00 on Monday from weeks 1-12, then the tutors allocated to that stream are occupied during that time on Monday for those weeks.
The number of tutors allocated to a session has to match the number of tutors field of a session stream.
A tutor must not be allocated more hours than the maximum number of weekly hours they specified.
```

## Specialisations

Software Engineering

## Categories

Web tools and Application

## Supervisor

Burkhard Wuensche

## Team

Lisa Wang
Brian Zhang
