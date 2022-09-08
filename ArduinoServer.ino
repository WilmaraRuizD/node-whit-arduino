int incomingByte = 0;
void setup(){
  //Configuramos el puerto serial
  Serial.begin(9600);
}
 
void loop(){
  //Imprimimos el valor del contador en el monitor serial
  Serial.print(incomingByte,DEC);
 delay(5000);
  //Serial.println(contador); 
 
}
