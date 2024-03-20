import { Component } from '@angular/core';
import { ApiService } from './api.service';

export interface pokemonList {
  imgfront: any;
  imgback: any;
  name: any;
  Type1: any;
  Type2: any;
  hp: any;
  att: any;
  def: any;
  special_att: any;
  special_def: any;
  speed: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private Service: ApiService) { }
  
  datas: any[] = [];
  public pokeDex: pokemonList[] = [];
  
  ngOnInit(): void {
    // this.getLoop()
  }
  
  getData(id: number) {
      this.Service.getPokemon(id).subscribe((res) => {
      this.datas.push(res);
      console.log(this.datas) 
      this.fomatData(this.datas);
      });
    }

  get(){
    console.error('error');
  }

  getLoop() {
    for(let i=1;i<=150;i++) {
      this.getData(i)
    }
  }

  fomatData(data: any) {
    let info = [];
    // console.log(data[1]["species"]["name"])
    for(let i=0;i<data.length;i++) {
      info.push({
        "name": data[i]["species"]["name"].toUpperCase(),
        "Type1": data[i]["types"][0]["type"]["name"],
        "Type2": data[i]["types"][1]?.type["name"] || "",
        "hp": data[i]["stats"][0]["base_stat"],
        "att": data[i]["stats"][1]["base_stat"],
        "def": data[i]["stats"][2]["base_stat"],
        "special_att": data[i]["stats"][3]["base_stat"],
        "special_def": data[i]["stats"][4]["base_stat"],
        "speed": data[i]["stats"][5]["base_stat"],
        "imgfront": data[i]["sprites"]["front_default"],
        "imgback": data[i]["sprites"]["back_default"]
      })
    }
    this.pokeDex = info;
    console.log(info)
  }

  num: number=0;
  showStar: String[] = [];
  star(n: number) {
    let display: String ='';
    let star: String='';
    for(let i=1;i<=n;i++) {
      for(let j=1;j<=i;j++) {
        star+=("*")
        display+=("*")
        console.log('*')
      }
      star+=('\n');
      this.showStar.push(display)
      display = '';
      console.log('\n')
    }
    console.log('\n')
    for(let i=1;i<n;i++) {
      for(let j=i;j<=n-1;j++) {
        star+=("*")
        display+=("*")
        console.log('*')
      }
      star+=('\n')
      this.showStar.push(display)
      display = '';
      console.log('\n')
    }
    console.log(this.showStar)
    // this.showStar[0] = star;
  }
}
