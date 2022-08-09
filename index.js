
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import {v4 as uuidv4}  from 'uuid';
import path from 'path';

import readmissionRoutes from './routes/readmission.routes.js';
import applicantRoutes from './routes/applicant.routes.js';
import studentRoutes from './routes/student.routes.js';
import withdrawalRoutes from './routes/withdrawal.routes.js';
import addRoutes from './routes/add.routes.js';
import courseBreakdownRoutes from './routes/course_beakdown.routes.js'
import courseOfferingRoutes from './routes/course_offering.routes.js';
import courseRegistraionRoutes from './routes/course_registration.routes.js';
import curriculumRoutes from './routes/curriculum.routes.js';
import departmentRoutes from './routes/department.routes.js';
import dropRoutes from './routes/drop.routes.js';
import staffRoutes from './routes/staff.routes.js';
import studentCourseRegistrationRoutes from './routes/student_course_registration.routes.js';
import imageRoutes from './trial/image.routes.js';
import course_designRoutes from './routes/course_design.routes.js';
import instructor_courseRoutes from './routes/instructor_course.routes.js';
import slipRoutes from './routes/slip.routes.js';
import semester_gradeRoutes from './routes/semester_grade.routes.js';
import totalsRoutes from './routes/totals.routes.js';
import applicationRoutes from './routes/application.routes.js';
import clearanceRoutes from './routes/clearance_routes.js';
import academic_calanderRoutes from './routes/academic_calander.routes.js';
import sectionRoutes from './routes/section.routes.js';
import student_detailRoutes from './routes/student_detail.routes.js';
import student_sectionRoutes from './routes/student_section.routes.js';
import attendanceRoutes from './routes/attendance.routes.js';

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images')
    },
    filename: function (req, file, cb) {
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false)
    }

}

let upload = multer({ storage: storage, fileFilter });

app.use('/applicants',upload.single("photo","grade10_national_exam"), applicantRoutes);
app.use('/student', studentRoutes);
app.use('/withdrawals', withdrawalRoutes);
app.use('/readmissions', readmissionRoutes);
app.use('/addsRegister', addRoutes);
app.use('/drops', dropRoutes);
app.use('/course_breakdowns', courseBreakdownRoutes);
app.use('/course_offerings', courseOfferingRoutes);
app.use('/course_registrations', courseRegistraionRoutes);
app.use('/curriculums', curriculumRoutes);
app.use('/departments', departmentRoutes);
app.use('/staffs', staffRoutes);
app.use('/student_course_registrations', studentCourseRegistrationRoutes);
app.use('/users/add', upload.single("photo"), imageRoutes);
app.use('/course_designs', course_designRoutes);
app.use('/instructor_courses', instructor_courseRoutes);
app.use('/slips', slipRoutes);
app.use('/semester_grades', semester_gradeRoutes);
app.use('/totals', totalsRoutes);
app.use('/applications', applicationRoutes);
app.use('/clearances', clearanceRoutes);
app.use('/academic_calanders', academic_calanderRoutes);
app.use('/sections', sectionRoutes);
app.use('/student_detail', student_detailRoutes);
app.use('/student_sections', student_sectionRoutes);
app.use('/attendances', attendanceRoutes);


const CONNECTION_URL = 'mongodb://localhost:27017/School';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

