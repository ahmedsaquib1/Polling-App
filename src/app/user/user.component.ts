import { Component, OnInit, ViewChild } from '@angular/core'
import { UserService } from './user.service'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  Data = []
  displayedColumns: string[] = ['position', 'username', 'role']

  dataSource!: MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) matsort!: MatSort

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsersList()
  }
  getUsersList() {
    this.userService.user().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data.data)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.matsort
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }
}
