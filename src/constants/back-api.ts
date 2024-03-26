export enum Auth {
  DELETE_TEACHER_COURSES_BY_ID = "DELETE teacher-api/courses/{courseId}",
  GET_TEACHER_COURSES = "GET teacher-api/courses",
  POST_TEACHER_COURSES = "POST teacher-api/courses",
  PATCH_TEACHER_COURSES_BY_ID = "PATCH teacher-api/courses/{courseId}",
  POST_TEACHER_COURSE_BILLS = "POST teacher-api/course-bills",
  PATCH_TEACHER_COURSE_BILLS_BY_ID = "PATCH teacher-api/course-bills/{courseBillId}",
  DELETE_TEACHER_COURSE_BILLS_BY_ID = "DELETE teacher-api/course-bills/{courseBillId}",
  GET_TEACHER_COURSE_BILLS = "GET teacher-api/course-bills",
  PATCH_TEACHER_COURSE_BILLS_BY_ID_SEND = "PATCH teacher-api/course-bills/{courseBillId}/send",

  GET_STUDENT_COURSES = "GET student-api/courses",
  GET_STUDENT_COURSES_BILLS = "GET student-api/course-bills",
  PATCH_STUDENT_COURSE_BILLS_BY_ID_PAY = "PATCH student-api/course-bills/{courseBillId}/pay",
  GET_STUDENT_ME_CARDS = "GET student-api/me-cards",
  POST_STUDENT_ME_CARDS = "POST student-api/me-cards",
  PATCH_STUDENT_ME_CARDS_BY_ID = "PATCH student-api/me-cards/{cardId}",
  DELETE_STUDENT_ME_CARDS_BY_ID = "DELETE student-api/me-cards/{cardId}"
}
