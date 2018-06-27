import { Action } from "@ngrx/store";
import { Course } from "./model/course";

export enum CourseActionType {
    CourseRequested = '[View Course Page] Course Requested',
    CourseLoaded = '[Course API] Course Loaded'
}

export class CourseRequested implements Action {
    readonly type: CourseActionType.CourseRequested;

    constructor(public payload: { courseId: number }) { }
}

export class CourseLoaded implements Action {
    readonly type: CourseActionType.CourseLoaded;

    constructor(public payload: { course: Course }) { }
}

export type CourseActions = CourseRequested | CourseLoaded;
