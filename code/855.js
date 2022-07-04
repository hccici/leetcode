const ExamRoom = function(N) {
  this.N = N;
  this.students =[];
};

ExamRoom.prototype.seat = function() {
      let student = 0;
      if (this.students.length > 0) {
          let dist = this.students[0];
          let prev = null;
          for (let s of this.students) {
              if (prev != null) {
                  let d = Math.floor((s - prev) / 2);
                  if (d > dist) {
                      dist = d;
                      student = prev + d;
                  }
              }
              prev = s;
          }
          let tempArr=this.students
          if (this.N - 1 - tempArr[tempArr.length-1] > dist)
              student = this.N - 1;
      }
     if(!this.students.includes(student)) this.students.push(student);
      this.students.sort((a,b)=>a-b);
      return student;
  }

ExamRoom.prototype.leave = function(p) {
    this.students=this.students.filter(v=> v!==p)
    this.students.sort((a,b)=>a-b)
}

const exam = new ExamRoom(10)
exam.seat()// -> 0，没有人在考场里，那么学生坐在 0 号座位上。
exam.seat()// -> 9，学生最后坐在 9 号座位上。
exam.seat()// -> 4，学生最后坐在 4 号座位上。
exam.seat()// -> 2，学生最后坐在 2 号座位上。
exam.leave(4)// -> null
exam.seat() //-> 5，学生最后坐在 5 号座位上。