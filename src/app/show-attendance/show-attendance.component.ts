import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { ActivatedRoute, Router } from '@angular/router';
import { Label, Color} from 'ng2-charts';
import { UserAttendance } from '../attendance-model';
import { UserAttendanceService } from '../user-attendance.service';

@Component({
  selector: 'app-show-attendance',
  templateUrl: './show-attendance.component.html',
  styleUrls: ['./show-attendance.component.css']
})
export class ShowAttendanceComponent implements OnInit {
  dates:string[] = [];
  lineChartLabels: Label[] = this.dates;
  attendanceList:Array<UserAttendance> = []
  constructor(private userService:UserAttendanceService) {
   console.log('attendanceList',this.attendanceList)
   
  }

  ngOnInit(): void {
    this.loadData()
  }

  // Define chart options
  lineChartOptions: ChartOptions = {
    responsive: true
  };

  // Define colors of chart segments
  lineChartColors: Color[] = [

    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
    }
  ];

  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  lineChartData: ChartDataSets[] = [
    { data: [], label: 'Present' },
    // { data: [Math.floor(Math.random() * 50), Math.floor(Math.random() * 50), Math.floor(Math.random() * 50), Math.floor(Math.random() * 50), Math.fl
  ]

   // Set true to show legends
   lineChartLegend = true;

   // Define type of chart
   lineChartType:ChartType = 'line';
 
   lineChartPlugins = [];

  loadData(){
    this.userService.getAllUser().subscribe((data) => {
      this.attendanceList = data
      this.attendanceList.forEach(data=>{
        this.dates.push(data.date)
        if(data.status=='True'){
          this.lineChartData[0].data?.push(1)
        }
        else{
          this.lineChartData[0].data?.push(0)
        }
      })
      console.log('dates',this.dates);
      console.log(data)
    })
  }

}