import { createTimeline, scrambleText, stagger } from 'https://esm.sh/animejs';

const tl = createTimeline({ loop: true });

tl.add('.slide:nth-child(1)', {
  opacity: {to: 1, duration: 250, ease: 'linear' },
  scale: [{from: .75, to: 1, duration: 1500, ease: 'inOut(3.5)'}],
  ease: 'inOut(3)',
});
tl.add('.slide:nth-child(1) p.center', {
  scale: { from: 3 },
  color: { from: 'var(--yellow-1)', to: 'var(--orange-1)' },
  innerHTML: scrambleText({
    override: ' ',
    ease: 'inQuad',
    duration: 500,
    from: 'center',
    cursor: '░▒▓█',
  }),
}, '<<');
tl.add('body', {
  background: 'var(--red-5)',
}, '<<+=50');
tl.add('.slide:nth-child(1) p:not(.center)', {
  scale: { from: .75 },
  color: { to: 'var(--red-1)' },