export class maxPost{
	name: string;
	key:	string;
	id: number;
	topic: string; 
	content: string;
	url: string;
	video: File;
	gif: File;
	image: FileList;
	date:Date;
	constructor	( image: FileList, gif: File,video: File){
	 this.image = image;
	 this.gif = gif;
	 this.video = video;
	}
}