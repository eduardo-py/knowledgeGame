let questions = [
    {
        title: 'gato',
        alternatives: ['dog', 'cat', 'bird', 'fish'],
        correctAnswer: 1
    },
    {
        title: 'ave',
        alternatives: ['mouse', 'hamster', 'lizard', 'bird'],
        correctAnswer: 3
    },
    {
        title: 'rata',
        alternatives: ['cat', 'fish', 'rat', 'shark'],
        correctAnswer: 2
    },
    {
        title: 'mosca',
        alternatives: ['fly', 'puma', 'fish', 'dog'],
        correctAnswer: 0
    }
];

let app = {
    start: function(){
        //with this we'll be able to change questions
        this.currPosition = 0;
        //THIS WILL SHOW THE SCORE
        this.score = 0;
        //GET ALTERNATIVES
        let alts = document.querySelectorAll('.alternative');

/*  FIRST WAY OF SOLVING CONTEXT PROBLEM
alts.forEach(function(element, index){
            element.addEventListener('click', function(){
            //check correct answer
                this.checkAnswer(index)
            }.bind(this));
        //"bind" method is used for bringing context to the forEach method because if it is on
        //a object and you want to use an object from it, it won't work.
        }.bind(this))*/

        //SECOND WAY OF SOLVING CONTEXT PROBLEM
        alts.forEach((element, index) =>{
            element.addEventListener('click', ()=>{
            //check correct answer
                this.checkAnswer(index)
            });
        //"bind" method is used for bringing context to the forEach method because if it is on
        //a object and you want to use an object from it, it won't work.
        })
        //REFRESH STATS
        this.updateStats();
        //SHOW FIRST QUESTION
        this.showQuestion(questions[this.currPosition]);
        },
    showQuestion: function(q){
        //SHOW QUESTION TITLE
        let titleDiv = document.getElementById('title');
        titleDiv.textContent = q.title;

        //SELECT BY A QUERY
        let alts = document.querySelectorAll('.alternative');

        //SHOW EACH ALTERNATIVES
        alts.forEach(function(element, index){
            element.textContent = q.alternatives[index];
        });
    },
    checkAnswer: function(userSelected){
        let currQuestion = questions[this.currPosition];

        if(currQuestion.correctAnswer == userSelected){
            //correct
            console.log('correct!');
            //update score
            this.score++;
            this.showResult(true);
        }
        else{
            //not correct
            console.log('not correct!');
            this.showResult(false);
        }
        //refresh stats
        this.updateStats();
        //increase position
        this.increasePosition();
        //show next question
        this.showQuestion(questions[this.currPosition]);
    },
    increasePosition: function(){
        this.currPosition++;
        if(this.currPosition == questions.length) {this.currPosition=0;}
    },
    updateStats: function(){
        let scoreDiv = document.getElementById('score');

        scoreDiv.textContent = `Your score: ${this.score}`
    },
    showResult: function(isCorrect){
        let resultDiv = document.getElementById('result');
        let result = '';

        //checks
        if(isCorrect){result='Correct Answer!'}
        else{result='Wrong Answer!'}
        resultDiv.textContent = result;
    }
}

app.start();
console.log(app);
