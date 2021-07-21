// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

// Import Services
import { ExameService } from '../../services/exame.service';
import { CourseService } from '../../services/course.service';
import { StudentService } from '../../services/student.service';
import { TeacherService } from '../../services/teacher.service';

// Import Models
import { Exame } from '../../domain/schoolprova_db/exame';
import { Course } from '../../domain/schoolprova_db/course';
import { Student } from '../../domain/schoolprova_db/student';
import { Teacher } from '../../domain/schoolprova_db/teacher';

// START - USED SERVICES
/**
* exameService.create
*	@description CRUD ACTION create
*
* exameService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* exameService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* courseService.list
*	@description CRUD ACTION list
*
* studentService.list
*	@description CRUD ACTION list
*
* teacherService.list
*	@description CRUD ACTION list
*
* exameService.validate
*	@description This API is use to validate the exam
*	@param String id id of the exam
*	@returns Boolean
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Exame
 */
@Component({
    selector: 'app-exame-edit',
    templateUrl: 'exame-edit.component.html',
    styleUrls: ['exame-edit.component.css']
})
export class ExameEditComponent implements OnInit {
    item: Exame;
    
    list_course: Course[];
    
    list_student: Student[];
    
    list_teacher: Teacher[];
    
    model: Exame;
    formValid: Boolean;

    constructor(
    private exameService: ExameService,
    private courseService: CourseService,
    private studentService: StudentService,
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Exame();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.exameService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.courseService.list().subscribe(list => this.list_course = list);
            this.studentService.list().subscribe(list => this.list_student = list);
            this.teacherService.list().subscribe(list => this.list_teacher = list);
        });
    }


    /**
     * Save Exame
     *
     * @param {boolean} formValid Form validity check
     * @param Exame item Exame to save
     */
    save(formValid: boolean, item: Exame): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.exameService.update(item).subscribe(data => this.goBack());
            } else {
                this.exameService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



