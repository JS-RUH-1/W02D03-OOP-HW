
class movei {

constructor(title , duration , start ){

    this.title=title;
    this.duration=duration;
    this.start=start;
}

}

const movei1= new movei("Puff the Magic Dragon lasts", 30 ,['puff,jackie', ' Living Sneezes']);

console.log(movei1);

document.getElementById('demo').innerHTML=
 movei1.title +
'for'
 +movei1.duration+
 ' minutes.' +
 'Starts :' + movei1.start;

// document.getElementById('demo1').innerHTML=movei1;