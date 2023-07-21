import { Component , OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  Allusers :any[]=[]
  page:any =1
  total:any
  icon=faPaperPlane
  perpage:any
 constructor(private service:UserService){

 }
  ngOnInit(): void {
    this.getUsers()
  }

 getUsers(){
  this.service.getAllUsers().subscribe((res:any) => {
    this.Allusers = res.data
    this.total=res.total
    this.perpage=res.per_page
    console.log(res)
    console.log( this.Allusers )
  })

 }

 changepage(event:any){
   this.page=event
 }
}
