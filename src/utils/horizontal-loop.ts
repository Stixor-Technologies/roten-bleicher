import gsap from "gsap";

// @ts-ignore
export const horizontalLoop = (items: HTMLLIElement[], config) => {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      //   onReverseComplete: () =>
      //     tl.totalTime(tl.rawTime() + tl.duration() * 100),
      onReverseComplete: () => {
        if (tl) {
          tl.totalTime(tl.rawTime() + tl.duration() * 100);
        }
      },
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    // @ts-ignore
    times = [],
    // @ts-ignore
    widths = [],
    // @ts-ignore
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    // @ts-ignore
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
    totalWidth,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;
  gsap.set(items, {
    // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
    xPercent: (i, el) => {
      //   let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
      let w = (widths[i] = parseFloat(
        gsap.getProperty(el, "width", "px") as string,
      ));
      //   xPercents[i] = snap(
      //     (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
      //       gsap.getProperty(el, "xPercent"),
      //   );
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px") as string) / w) * 100 +
          parseFloat(gsap.getProperty(el, "xPercent") as string), // Explicitly cast to number
      );
      // @ts-ignore
      return xPercents[i];
    },
  });
  gsap.set(items, { x: 0 });

  totalWidth =
    items[length - 1].offsetLeft +
    // @ts-ignore
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      //   gsap.getProperty(items[length - 1], "scaleX") +
      parseFloat(gsap.getProperty(items[length - 1], "scaleX") as string) +
    (parseFloat(config.paddingRight) || 0);
  for (i = 0; i < length; i++) {
    item = items[i];
    // @ts-ignore
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop =
      //   distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");

      distanceToStart +
      // @ts-ignore

      widths[i] * (gsap.getProperty(item, "scaleX") as number);

    tl.to(
      item,
      {
        // @ts-ignore
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0,
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            // @ts-ignore
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100,
          ),
        },
        {
          // @ts-ignore
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond,
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }

  // @ts-ignore

  function toIndex(index, vars) {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length); // always go in the shortest direction
    let newIndex = gsap.utils.wrap(0, length, index),
      // @ts-ignore
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      // if we're wrapping the timeline's playhead, make the proper adjustments
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }

  // @ts-ignore

  tl.next = (vars) => toIndex(curIndex + 1, vars);
  // @ts-ignore
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  // @ts-ignore
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render for performance
  if (config.reversed) {
    // @ts-ignore
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
};
