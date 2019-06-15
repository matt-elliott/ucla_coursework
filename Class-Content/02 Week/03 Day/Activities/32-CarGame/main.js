//waiting for full page load
document.addEventListener('DOMContentLoaded', function () {
    console.log('ready');
    //define car object
    var car = {
        make: "Honda",
        model: "Fit",
        color: "Blue Raspberry",
        mileage: 3000,
        isWorking: true,

        driveToWork: function() {

          alert("Old Mileage: " + this.mileage);

          this.mileage = this.mileage + 8;

          alert("New mileage: " + this.mileage);
        },

        driveAroundWorld: function() {

          alert("Old Mileage: " + this.mileage);

          this.mileage = this.mileage + 24000;

          alert("New Mileage: " + this.mileage);
          alert("Car needs a tuneup!");

          this.isWorking = false;
        },

        getTuneUp: function() {
          alert("Car is ready to go!");
          this.isWorking = true;
        },

        honk: function() {
          alert("Honk! Honk!");
        },

        reWriteStates: function() {
            console.log(
                'Car Make : ', this.make,
                'Car Model : ', this.model,
                'Car Color : ', this.color,
                'Car Mileage : ', this.mileage,
                'Car is Running : ', this.isWorking
            )
        }
    };
    
    //when user presses key - method fires
    document.onkeyup = function (e) {
        switch (e.key) {
            case 'd':
                car.driveToWork();
                break;
            case 'a':
                car.driveAroundWorld();
                break;
            case 'g':
                car.getTuneUp();
                break;
            case 'h':
                car.honk();
                break;
            case 'r':
                car.reWriteStates();
        }

        //keyup also fires global function reWriteStates() that logs car details
        car.reWriteStates();
    } 
});