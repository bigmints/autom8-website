import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div initial={reduced ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>;
}

function Ink({ d, delay = 0, className = '', width = 1.5 }: { d: string; delay?: number; className?: string; width?: number }) {
  const reduced = useReducedMotion();
  return <motion.path d={d} fill="none" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" initial={reduced ? false : { pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ pathLength: { duration: 1.7, delay, ease: 'easeInOut' }, opacity: { duration: 0.3, delay } }} className={className} />;
}

export function HeroIllustration() {
  return (
    <svg viewBox="0 0 1400 620" fill="none" className="h-full w-full text-violet-600" aria-hidden="true">
      <g className="text-violet-200">
        <Ink d="M0 495C180 496 30 302 234 291C409 282 378 140 550 130M1400 100C1230 110 1364 320 1150 349C1032 364 1080 532 940 550" />
        <Ink d="M0 520C198 523 54 320 243 316C425 312 398 167 550 155M1400 127C1250 140 1380 348 1168 377C1050 394 1098 558 950 576" delay={0.2} />
      </g>
      <g transform="translate(72 194) rotate(-9 110 120)">
        <rect x="0" y="0" width="188" height="216" rx="5" fill="#fff" />
        <Ink d="M8 0H180Q188 0 188 8V208Q188 216 180 216H8Q0 216 0 208V8Q0 0 8 0ZM0 34H188M15 17H19M28 17H32M41 17H45" />
        <Ink d="M20 57H87M20 68H63M20 92H167V165H20ZM20 142L64 109L99 136L128 113L167 150M20 187H107M20 198H73" delay={0.3} />
        <circle cx="141" cy="112" r="8" stroke="currentColor" strokeWidth="1.3" />
        <rect x="122" y="181" width="46" height="18" rx="4" fill="#ede9fe" />
      </g>
      <g transform="translate(1160 189) rotate(10 66 114)">
        <rect width="130" height="230" rx="20" fill="#fff" />
        <Ink d="M22 0H108Q130 0 130 22V208Q130 230 108 230H22Q0 230 0 208V22Q0 0 22 0ZM46 13H84M48 216H82" delay={0.2} />
        <rect x="15" y="36" width="100" height="91" rx="7" fill="#f5f3ff" />
        <Ink d="M29 60H84M29 72H66M29 107L46 92L65 99L93 82M15 146H82M15 158H111M15 177H93M15 189H70" delay={0.5} />
      </g>
      <g className="text-violet-400">
        <Ink d="M340 432C330 470 378 503 412 472C435 451 416 420 401 438C375 470 459 507 519 483M499 475L521 482L510 503" delay={0.6} />
        <Ink d="M1065 120C1047 66 998 57 967 82C938 105 981 127 988 100C994 72 949 45 921 63M927 48L919 63L936 69" delay={0.4} />
        <Ink d="M1030 471L1040 490L1061 496L1040 502L1030 521L1024 502L1003 496L1024 490Z" delay={0.7} />
        <Ink d="M295 101V126M283 113H307M1092 394V409M1085 401H1100" delay={0.6} />
      </g>
      <circle cx="324" cy="351" r="4" fill="#c4b5fd" /><circle cx="1058" cy="240" r="4" fill="#c4b5fd" />
      <Ink d="M504 558C618 540 775 543 894 558M531 566C650 555 779 560 873 568" className="text-violet-200" delay={0.7} />
    </svg>
  );
}

export function FeatureIllustration({ kind }: { kind: number }) {
  return (
    <svg viewBox="0 0 480 280" className="h-full w-full text-violet-600" fill="none" aria-hidden="true">
      <circle cx="240" cy="140" r="110" fill="#f5f3ff" />
      {kind === 0 && <>
        <rect x="28" y="75" width="172" height="102" rx="12" fill="white" />
        <Ink d="M43 75H185Q200 75 200 90V162Q200 177 185 177H43Q28 177 28 162V90Q28 75 43 75ZM47 101H162M47 114H142M47 127H174M47 140H110" />
        <Ink d="M210 128C242 128 230 81 265 81M255 73L266 81L255 89M210 128C242 128 230 200 265 200M255 192L266 200L255 208" delay={0.3} className="text-violet-300" />
        {[0, 1].map((index) => (
          <g key={index} transform={`translate(280 ${index * 128 + 27})`}>
            <rect width="164" height="101" rx="8" fill="white" stroke="#a78bfa" />
            <Ink d="M0 19H164M12 10H35M13 37H81M13 47H64M82 64H145M82 74H128M82 84H140" delay={0.4 + index * 0.15} />
            <rect x="13" y="62" width="54" height="23" rx="4" fill="#ddd6fe" />
          </g>
        ))}
      </>}
      {kind === 1 && <>
        <g transform="translate(90 44) rotate(-8 100 90)"><rect width="218" height="167" rx="8" fill="#ede9fe" stroke="#c4b5fd" /></g>
        <rect x="138" y="65" width="238" height="167" rx="8" fill="white" />
        <Ink d="M146 65H368Q376 65 376 73V224Q376 232 368 232H146Q138 232 138 224V73Q138 65 146 65ZM138 96H376M153 80H175M154 196H219M154 207H193" />
        {['#6d28d9', '#a78bfa', '#ddd6fe', '#f5f3ff'].map((fill, i) => <rect key={fill} x={154 + i * 51} y="114" width="40" height="60" rx="4" fill={fill} />)}
        <Ink d="M314 205L324 190L331 205M318 200H328M395 43V66M384 55H407" delay={0.4} />
      </>}
      {kind === 2 && <>
        <Ink d="M102 141H163Q176 141 176 128V69H207M176 141V209H207M274 69H306Q318 69 318 82V141H357M274 209H306Q318 209 318 196V141" className="text-violet-300" delay={0.15} />
        <rect x="33" y="113" width="69" height="56" rx="8" fill="white" stroke="#8b5cf6" />
        <rect x="207" y="41" width="67" height="56" rx="8" fill="white" stroke="#8b5cf6" />
        <rect x="207" y="181" width="67" height="56" rx="8" fill="white" stroke="#8b5cf6" />
        <rect x="357" y="113" width="80" height="56" rx="8" fill="#7c3aed" />
        <Ink d="M49 132H85M49 144H70M223 60H256M223 72H247M223 201H256M223 213H247" delay={0.3} />
        <path d="M384 142L393 151L410 133" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </>}
      {kind === 3 && <>
        <rect x="82" y="40" width="280" height="190" rx="10" fill="white" />
        <Ink d="M92 40H352Q362 40 362 50V220Q362 230 352 230H92Q82 230 82 220V50Q82 40 92 40ZM82 70H362M97 55H127M144 70V230M99 91H127M99 105H119M99 119H125M165 96H272M165 109H234" />
        <rect x="164" y="129" width="80" height="64" rx="6" fill="#ede9fe" />
        <rect x="257" y="129" width="84" height="64" rx="6" fill="#7c3aed" />
        <Ink d="M314 178L340 242L351 216L377 208Z" delay={0.7} width={2} />
      </>}
    </svg>
  );
}
