int buttonPin = A0;     //Button and LED pin numbers
int ledRed = 8;



void setup() 
{
    pinMode(ledRed, OUTPUT);
    Serial.begin(9600);           //Serial monitor used to determine limit values
}

void loop() {
  int temp = analogRead(buttonPin);   //Read the analogue input
//  Serial.println(temp);               //Display the read value in the Serial monitor
  if (temp < 400)                     //Lower limit for first button - if below this limit then no button is pushed and LEDs are turned off
  {
    Serial.println("1");
    digitalWrite(ledRed, HIGH);
  }
  else if (400 <= temp && temp < 600)                //First button limit - if below this limit but above previous limit then the first button is pressed
  {
    Serial.println("2");
    digitalWrite(ledRed, HIGH);
 
  }
  else if (600 <= temp && temp < 700)                //Second button limit
  {
    Serial.println("3");
    digitalWrite(ledRed, HIGH);
 
  }
  else if (700 <= temp && temp < 800)                //Third button limit
  {
    Serial.println("4");
    digitalWrite(ledRed, HIGH);
  
  }else if (800 <= temp && temp < 900)                //Third button limit
  {
    Serial.println("5");
    digitalWrite(ledRed, HIGH);
  
  }else{
    digitalWrite(ledRed, LOW);
  }
  delay(100);                         //Delay for stability
}
