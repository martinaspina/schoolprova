import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { ExameService } from '../../services/exame.service';
// Import Models
import { Exame } from '../../domain/schoolprova_db/exame';

// START - USED SERVICES
/**
* exameService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* exameService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Exame
 * @class ExameListComponent
 */
@Component({
    selector: 'app-exame-list',
    templateUrl: './exame-list.component.html',
    styleUrls: ['./exame-list.component.css']
})
export class ExameListComponent implements OnInit {
    list: Exame[];
    search: any = {};
    idSelected: string;
    constructor(
        private exameService: ExameService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.exameService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Exame to remove
     *
     * @param {string} id Id of the Exame to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Exame
     */
    deleteItem() {
        this.exameService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
