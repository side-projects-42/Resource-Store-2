# Modules

## Block Structures

There are three basic block structures that you can build from. Examine how the structures work in Firebug, Dragonfly, WebKit Inspector or by applying the stylesheet mod_debug.css

---

### mod

Mod is the basic container, all other containers inherit from this one. This is the high performance container that should be used unless you specifically need another type of container.

- One tiny image
- Expands to any height or width
- Compatible with any content
- Choose for any container object that doesn't require outside transparency or complex borders.

---

---

### complex

complex should be used in cases where you require images for borders because borders or drop shadows are too complex to be simulated via borders on mod and/or inner.

- One image
- Height and width limited by image size
- Compatible with any content
- Choose when you require complex borders which cannot be simulated via css borders on mod and inner.

Inspired by a conversation with Arnaud.

---

---

### pop

Use for popups and other containers that need outside transparency.

- One image
- Height and width limited by image size
- Compatible with any container, but not any content
- Choose when you require outside transparency which cannot be simulated. (do i need to make this work with clip rather than bkg position?)

Inspired by [Leslie Sommer’s Mojo blocks](http://www.lesliesommer.com/wdw07/html/ "CSS Mojo: Adding Polish To Your Pages").

---

## Block Skins

### Contour

#### Extends mod

---

### grab

Body

Absolute positioned element **neg margins**

---

---

### simpleExt

Body

---

---

### simple

Body

---

---

### noted

Body

---

---

### talk

Body

---

---

### me

Body

---

---

### basic

Must be combined with a background color or content, adds rounded corners.

---

#### Extends complex

---

### excerpt

Body

Foot

---

---

### flow

[Body](#)

---

---

![boo](http://placehold.it/269x179)

---

#### Extends pop

---

### sommers

Body

---

---

### gonzalo

Body

---

## Background Objects

---

### highlight

Body

---

---

### universe

Body

---

---

### comment

Body

---

---

### foo

Body

---

---

### nicole

Body

---

---

### login

Body

---

## Block Headers

### Bam

### Topper

### Section

## Block Footers

button here
