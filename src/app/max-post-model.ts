export class maxPost extends FormData{
	name: string;
	key:	string;
	id: number;
	topic: string; 
	content: string;
	url: string;
	img: File;
	video: File;
	constructor( img : File, video: File){
	super();
	 this.img = img;
	 this.video = video;
	}
}