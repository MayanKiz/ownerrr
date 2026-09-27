import {
  createTimeline,
  scrambleText,
  stagger
} from 'https://esm.sh/animejs';

const tl = createTimeline({
  loop: true
});


/* =====================================
   SLIDE 1
===================================== */

tl.add('.slide:nth-child(1)', {
  opacity: {
    to: 1,
    duration: 250,
    ease: 'linear'
  },

  scale: [
    {
      from: 0.75,
      to: 1,
      duration: 1500,
      ease: 'inOut(3.5)'
    }
  ],

  ease: 'inOut(3)'
});


/* Small intro text */

tl.add('.slide:nth-child(1) p:not(.center)', {
  scale: {
    from: 0.75
  },

  color: {
    to: 'var(--red-1)'
  },

  innerHTML: scrambleText({
    override: ' ',
    from: 'center',
    duration: 500,
    revealDelay: 250,
    cursor: '░▒▓',
    perturbation: 0.25
  })

}, stagger(
  [250, 750],
  {
    grid: true,
    from: 'center',
    ease: 'out(3)',
    start: '<<'
  }
));


/* Red background */

tl.add('body', {
  background: 'var(--red-5)'
}, '<<+=50');


/* Clear small text */

tl.add('.slide:nth-child(1) p:not(.center)', {
  innerHTML: scrambleText({
    text: '',
    override: false,
    from: 'center',
    ease: 'outQuad',
    reversed: true,
    duration: 800,
    cursor: '░▒▓'
  })
}, '<+=150');


/* Return background */

tl.add('body', {
  background: 'var(--black-1)'
}, '<-=600');


/* =====================================
   MAYANK NAME
===================================== */

tl.add('.slide:nth-child(1) p.center', {

  scale: 1.5,

  color: {
    to: 'var(--lime-1)'
  },

  ease: 'inOutExpo',

  duration: 1500,

  innerHTML: scrambleText({

    text: 'Mayank Yadav',

    ease: 'inQuad',

    override: false,

    from: 'center',

    duration: 1000,

    perturbation: 0.25

  })

}, '<<');


/* =====================================
   FIELD
===================================== */

tl.add('.slide:nth-child(1) p.center', {

  scale: 1,

  color: 'var(--white-1)',

  ease: 'inOutExpo',

  duration: 1150,

  innerHTML: scrambleText({

    override: false,

    text: 'CSE • AI & ML',

    from: 'right',

    duration: 950,

    settleDuration: 500,

    ease: 'inOut'

  })

}, '<+=250');


/* Clear slide 1 */

tl.add('.slide:nth-child(1) p.center', {

  innerHTML: scrambleText({

    text: '',

    override: false,

    from: 'random',

    reversed: true,

    duration: 850,

    perturbation: 0.5

  })

}, '<+=500');


/* =====================================
   SLIDE 2
===================================== */

tl.set('.slide:nth-child(2)', {

  opacity: 1

}, '<<');


/* Reveal slide 2 */

tl.add('.slide:nth-child(2) p', {

  innerHTML: scrambleText({

    override: ' ',

    from: 'center',

    duration: 500,

    revealDelay: 250,

    cursor: '░▒▓',

    perturbation: 0.5

  })

}, stagger(
  [0, 1000],
  {
    grid: true,
    from: 'center',
    ease: 'out(3)',
    start: '<<+=250',
    reversed: true
  }
));


/* Scale animation */

tl.add('.slide:nth-child(2) p', {

  scale: [0.8, 1]

}, stagger(
  [0, 150],
  {
    grid: true,
    from: 'center',
    ease: 'out(3)',
    start: '<<',
    reversed: true
  }
));


/* Clear slide 2 */

tl.add('.slide:nth-child(2) p', {

  innerHTML: scrambleText({

    text: '&nbsp;',

    override: false,

    from: 'center',

    reversed: true,

    duration: 500,

    cursor: '░▒▓'

  })

}, stagger(
  [0, 750],
  {
    grid: true,
    from: 'center',
    ease: 'out(3)',
    start: '<+=500'
  }
));


/* =====================================
   SLIDE 3
===================================== */

tl.set('.slide:nth-child(3)', {

  opacity: 1

}, '<<');


/* Initial text */

tl.add('.slide:nth-child(3) p', {

  color: 'var(--white-1)',

  scale: 1.5,

  ease: 'inOutExpo',

  innerHTML: scrambleText({

    override: ' ',

    from: 'center',

    settleDuration: 500,

    revealRate: 33,

    perturbation: 0.2

  })

}, '-=250');


/* Developer identity */

tl.add('.slide:nth-child(3) p', {

  color: {
    to: 'var(--orange-1)',
    duration: 750
  },

  ease: 'inOutExpo',

  duration: 1250,

  innerHTML: scrambleText({

    text: 'Developer • Cybersecurity',

    override: false,

    from: 'right',

    cursor: '░▒▓',

    duration: 750,

    ease: 'inOut'

  })

}, '<+=750');


/* Final message */

tl.add('.slide:nth-child(3) p', {

  color: 'var(--yellow-1)',

  scale: 2,

  ease: 'inOutExpo',

  duration: 750,

  innerHTML: scrambleText({

    text: 'BUILD • LEARN • CREATE',

    chars: '#!%░▒▓_01',

    override: false,

    duration: 750,

    ease: 'out(2)',

    from: 'right'

  })

}, '<+=1000');


/* Orange background */

tl.add('body', {

  background: 'var(--orange-5)',

  duration: 750

}, '<<');


/* =====================================
   START
===================================== */

tl.init();
