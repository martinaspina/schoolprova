// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

// Import Services
import { TeacherService } from '../../services/teacher.service';
import { ExameService } from '../../services/exame.service';
import { CourseService } from '../../services/course.service';

// Import Models
import { Teacher } from '../../domain/schoolprova_db/teacher';
import { Course } from '../../domain/schoolprova_db/course';
import { Exame } from '../../domain/schoolprova_db/exame';

// START - USED SERVICES
/**
* teacherService.create
*	@description CRUD ACTION create
*
* teacherService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* teacherService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* exameService.findBy_teacher
*	@description CRUD ACTION findBy_teacher
*	@param Objectid key Id of model to search for
*
* courseService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Teacher
 */
@Component({
    selector: 'app-teacher-edit',
    templateUrl: 'teacher-edit.component.html',
    styleUrls: ['teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit {
    item: Teacher;
    
    list_course: Course[];
    
    externalExame__teacher: Exame[];
    model: Teacher;
    formValid: Boolean;

    constructor(
    private teacherService: TeacherService,
    private exameService: ExameService,
    private courseService: CourseService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Teacher();
        this.externalExame__teacher = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.teacherService.get(id).subscribe(item => this.item = item);
                this.exameService.findBy_teacher(id).subscribe(list => this.externalExame__teacher = list);
            }
            // Get relations
            this.courseService.list().subscribe(list => this.list_course = list);
        });
    }

    /**
     * Check if an Course is in  _course
     *
     * @param {string} id Id of Course to search
     * @returns {boolean} True if it is found
     */
    containCourse(id: string): boolean {
        if (!this.item._course) return false;
        return this.item._course.indexOf(id) !== -1;
    }

    /**
     * Add Course from Teacher
     *
     * @param {string} id Id of Course to add in this.item._course array
     */
    addCourse(id: string) {
        if (!this.item._course)
            this.item._course = [];
        this.item._course.push(id);
    }

    /**
     * Remove an Course from a Teacher
     *
     * @param {number} index Index of Course in this.item._course array
     */
    removeCourse(index: number) {
        this.item._course.splice(index, 1);
    }

    /**
     * Save Teacher
     *
     * @param {boolean} formValid Form validity check
     * @param Teacher item Teacher to save
     */
    save(formValid: boolean, item: Teacher): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.teacherService.update(item).subscribe(data => this.goBack());
            } else {
                this.teacherService.create(item).subscribe(data => this.goBack());
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



