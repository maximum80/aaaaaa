#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>

int isPrime(int n) {
  //ここに素数判定プログラムを実装してください。
  return -1;
}

int primeSeq(int n) {
  //ここに素数を一文字づつ数列化した際のn番目の数値を出力するプログラムを実装してください。
  return -1;
}

int main(int argc, char *argv[])
{
  if (argc != 3) {
    printf("usage: ./a.out 1|2 <number>\n");
    return 1;
  }

  int arg1 = atoi(argv[1]);
  int arg2 = atoi(argv[2]);
  if (arg1 == 1) {
    printf("%d\n", isPrime(arg2));
  } else {
    printf("%d\n", primeSeq(arg2));
  }
  return 0;
}
