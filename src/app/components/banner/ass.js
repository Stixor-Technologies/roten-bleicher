var slides = $(".box"),
  slidesWrapper = $(".slider-wrapper"),
  // next = $("#nextBtn"),
  // prev = $("#prevtBtn"),
  moveSlideTL = gsap.timeline();

function dotClick() {
  if (!moveSlideTL.isActive()) {
    var slideFrom = $(".box.active"),
      sectionToIndex = $(this).index(),
      slideTo = slides.eq(sectionToIndex);

    if (slideFrom.index() !== slideTo.index()) {
      moveToSlide(slideFrom, slideTo);
    }
  }
}

function nextClick() {
  if (!moveSlideTL.isActive()) {
    var slideFrom = $(".box.active"),
      sectionToIndex = slides.index(slideFrom);

    if (sectionToIndex !== slides.length - 1) {
      slideTo = slides.eq(sectionToIndex + 1);
      moveToSlide(slideFrom, slideTo);
    } else {
      slideTo = slides.eq(0);
      moveToSlide(slideFrom, slideTo);
    }
  }
}

function prevClick() {
  if (!moveSlideTL.isActive()) {
    var slideFrom = $(".box.active"),
      sectionToIndex = slides.index(slideFrom);

    if (sectionToIndex != 0) {
      slideTo = slides.eq(sectionToIndex - 1);
      moveToSlide(slideFrom, slideTo);
    } else {
      slideTo = slides.eq(slides.length - 1);
      moveToSlide(slideFrom, slideTo);
    }
  }
}

function moveToSlide(slideFrom, slideTo) {
  if (slides.index(slideFrom) < slides.index(slideTo)) {
    moveSlideTL = gsap
      .timeline({
        onStart: setActiveSlide,
        onStartParams: [slideTo, slideFrom],
      })
      .to(slideFrom, 1, {
        opacity: 0,
        autoAlpha: 0,
        ease: "power4.inOut",
        clearProps: "all",
        className: "box",
        opacity: 0.5,
      })

      // .set(slideTo, {left: 'auto', right: 0}, 0)
      .to(
        slideTo,
        1,
        {
          opacity: 1,
          autoAlpha: 1,
          ease: "power4.inOut",
          className: "box active",
        },
        0,
      );
    // .set(slideTo, {left: 0, right: 'auto'})
  } else {
    moveSlideTL = gsap
      .timeline({
        onStart: setActiveSlide,
        onStartParams: [slideTo, slideFrom],
      })
      // .set(slideFrom, {left: 'auto', right: 0})
      .to(slideFrom, 1, {
        opacity: 0,
        autoAlpha: 0,
        ease: "power4.inOut",
        clearProps: "all",
        className: "box",
      })

      // .set(slideTo, {left: 0, right: 'auto', autoAlpha: 0}, 0)
      .to(
        slideTo,
        1,
        {
          opacity: 1,
          autoAlpha: 1,
          ease: "power4.inOut",
          className: "box active",
        },
        0,
      );
  }
}

function setActiveSlide(slide) {
  var currentSlideIndex = slides.index(slide);
  // gsap.to(".dot.active", {opacity: 0.5});
  // $(".dot.active").removeClass("active");
  // $(".dot").eq(currentSlideIndex).addClass("active");
  // gsap.to(".dot.active", {opacity: 1});
}

function init() {
  gsap.set(".box.active", { width: "100%" });
  gsap.to({}, 2, { onRepeat: nextClick, repeat: -1 });
}

init();
