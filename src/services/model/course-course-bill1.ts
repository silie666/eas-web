/* tslint:disable */
/* eslint-disable */
/**
 * 学校
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { CourseSimpleCourse1 } from './course-simple-course1';
// May contain unused imports in some cases
// @ts-ignore
import { CourseStudentCourseBill } from './course-student-course-bill';

/**
 * 
 * @export
 * @interface CourseCourseBill1
 */
export interface CourseCourseBill1 {
    /**
     * ID
     * @type {number}
     * @memberof CourseCourseBill1
     */
    'id'?: number;
    /**
     * 状态
     * @type {boolean}
     * @memberof CourseCourseBill1
     */
    'status'?: boolean;
    /**
     * 状态名称
     * @type {string}
     * @memberof CourseCourseBill1
     */
    'status_name'?: string;
    /**
     * 课程IDs
     * @type {Array<number>}
     * @memberof CourseCourseBill1
     */
    'course_ids'?: Array<number>;
    /**
     * 
     * @type {Array<CourseSimpleCourse1>}
     * @memberof CourseCourseBill1
     */
    'courses'?: Array<CourseSimpleCourse1>;
    /**
     * 创建时间
     * @type {string}
     * @memberof CourseCourseBill1
     */
    'create_time'?: string;
    /**
     * 
     * @type {Array<CourseStudentCourseBill>}
     * @memberof CourseCourseBill1
     */
    'student_course_bills'?: Array<CourseStudentCourseBill>;
}

