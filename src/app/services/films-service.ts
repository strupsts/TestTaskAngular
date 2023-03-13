import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {delay, Observable} from "rxjs";
import {ICard} from "../models/ICard";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
    userFavourite: ICard | null = null    // Выбранный пользователем лучший фильм. По умолчанию null
    filmImgPath = "../../assets/images/"  // Путь до картинок
    injFromLS: any                        // Переменная для проверки local storage
    genreBase = [                         // Массив жанров
        "драма",
        "биография",
        "история",
        "фэнтези",
        "приключения",
        "боевик",
        "мультфильм",
        "комедия",
        "триллер",
        "детектив",
        "фантастика"
    ]


    constructor(private http: HttpClient) {}  // Инстанс для отправки запросов по http протоколу

    // Метод возвращает стрим по get запросу. Утилита delay для эмуляции получения данных с сервера
    getAllFilms(): Observable<ICard[]> {
      return this.http.get<ICard[]>('../../assets/data.json').pipe(delay(300))
    }

    // Метод вызывается при загрузке страницы и проверяет, выбирал ли пользователь ранее фильм
    // Проверка происходит по наличию данных в localStorage. Если выбирал - фильм подтягивается
    // в "глобальный стейт" userFavourite и отображается в "Лучших фильмах"
    checkFavouriteOnInit(){
        this.injFromLS = localStorage.getItem('userFavFilm')
        if(this.injFromLS){
         this.userFavourite = JSON.parse(this.injFromLS)
        }
    }

    // Метод проверяет фильм, который пользователь выбрал "лучшим".
    // Если этот фильм ранее уже БЫЛ выбран лучшим - он исчезает из "Лучшие фильмы"(и из local storage)
    // Если НЕ БЫЛ, то он появляется в "Лучшие фильмы"(заменяя прошлый) и записывается в local storage
    changeFavourite(card:any) {
      if(card.name === this.userFavourite?.name) {
        localStorage.removeItem('userFavFilm')
        return this.userFavourite = null
      }
      this.userFavourite = card
      localStorage.setItem('userFavFilm', JSON.stringify(card))
      return
    }

    // Метод принимает массив с цифрами жанров и возвращает строку с текстовым вариантом жанров
    getGenres (genreNums: number[]): string {
      let genreArr = genreNums.map(genreNum=>{
        return this.genreBase.find((genre, index)=>index+1 === genreNum  )
      })
      return genreArr.join(', ')
    };
}
