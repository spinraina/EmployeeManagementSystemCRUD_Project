import { Component } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {

ulist:any=[];

constructor(public cs:CrudService) {
  this.fetchAllUsers();
}

fetchAllUsers()
{
  this.cs.getAllUsers().subscribe(res => {
    this.ulist=res;
  });
}
deleteInfo(id:number){
  if(confirm("Are you confirm to delete?")){
      this.cs.deleteUser(id).subscribe(res =>{
        this.fetchAllUsers();
      });
      }
}
}