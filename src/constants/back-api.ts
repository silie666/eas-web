export enum Auth {
  DELETE_TEACHER_COURSES_BY_ID = "DELETE api/teacher-api/courses/{courseId}",
  GET_TEACHER_COURSES = "GET api/teacher-api/courses",
  POST_TEACHER_COURSES = "POST api/teacher-api/courses",
  PATCH_TEACHER_COURSES_BY_ID = "PATCH api/teacher-api/courses/{courseId}",
  POST_TEACHER_COURSE_BILLS = "POST api/teacher-api/course-bills",
  PATCH_TEACHER_COURSE_BILLS_BY_ID = "PATCH api/teacher-api/course-bills/{courseBillId}",
  DELETE_TEACHER_COURSE_BILLS_BY_ID = "DELETE api/teacher-api/course-bills/{courseBillId}",
  GET_TEACHER_COURSE_BILLS = "GET api/teacher-api/course-bills",
  PATCH_TEACHER_COURSE_BILLS_BY_ID_SEND = "PATCH api/teacher-api/course-bills/{courseBillId}/send",

  GET_STUDENT_COURSES = "GET api/student-api/courses",
  GET_STUDENT_COURSES_BILLS = "GET api/student-api/course-bills",
  PATCH_STUDENT_COURSE_BILLS_BY_ID_PAY = "PATCH api/student-api/course-bills/{courseBillId}/pay",
  GET_STUDENT_ME_CARDS = "GET api/student-api/me-cards",
  POST_STUDENT_ME_CARDS = "POST api/student-api/me-cards",
  PATCH_STUDENT_ME_CARDS_BY_ID = "PATCH api/student-api/me-cards/{cardId}",
  DELETE_STUDENT_ME_CARDS_BY_ID = "DELETE api/student-api/me-cards/{cardId}"
}
