export class Song {
  public name: string;
  public imgUrl: string;
  public playUrl: string;
  public artistList: string[];

  constructor(name, imgUrl, playUrl, artistList){
    this.name = name;
    this.imgUrl = imgUrl;
    this.playUrl = playUrl;
    this.artistList = artistList;
  }
}
