import { Observable, timer } from 'rxjs';

console.log('App started');

const timer$ = new Observable<number>((subscriber) => {
  const timeoutId = setTimeout(() => {
    console.log('Timeout!');
    subscriber.next(0);
    subscriber.complete();
  }, 2000);

  return () => clearTimeout(timeoutId);
});

const subscrition = timer(2000).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed!'),
});

setTimeout(() => {
  subscrition.unsubscribe();
  console.log('Unsubscribe');
}, 1000);
