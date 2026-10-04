# Week 7 — Wireframes & Prototype Handoff
## Hill Country Trail Guide

**Primary User:** Maya Torres

**Primary Task:** Choose a beginner-appropriate Saturday hike that can be completed in about three hours or less.

---

## 1. Project Overview

The Module 6 UX evaluation identified three main problems for Maya: estimated hike times were difficult to find, difficulty labels did not provide enough information, and the trail filters needed improvement. This project addresses those problems by making trail information easier to compare and giving Maya a simple way to narrow down her options.

---

## 2. Three Design Requirements

### Requirement 1

**Week 6 problem:**  
Estimated hike times were difficult to identify when comparing trails.

**Design requirement:**  
Estimated hike times must be easy to identify when Maya compares trail options.

**How this helps Maya:**  
Maya can quickly tell whether a trail fits within her goal of a three-hour hike without having to search through the trail information.

### Requirement 2

**Week 6 problem:**  
Difficulty labels did not provide enough information for Maya to understand what the difficulty level meant.

**Design requirement:**  
Difficulty labels must provide additional information that helps Maya understand the level of difficulty.

**How this helps Maya:**  
Maya can better judge whether a trail is appropriate for her experience level before choosing it.

### Requirement 3

**Week 6 problem:**  
The trail filtering experience made it difficult to narrow down trails based on Maya's needs.

**Design requirement:**  
Trail filters must allow Maya to easily narrow down trails based on difficulty and hike time.

**How this helps Maya:**  
Maya can quickly reduce the number of trail options and focus on hikes that fit her needs.

---

## 3. Figma Prototype Link

https://www.figma.com/design/eBRdSt4hIjvJgJ5ZKAV5bW/Module-7?node-id=0-1&t=k1R7VccKycmWeEwD-1

---

## 4. Required Wireframe Exports

1. `wireframes/desktop-primary.png`

2. `wireframes/mobile-primary.png`

3. `wireframes/task-state-01.png`

4. `wireframes/task-state-02.png`

---

## 5. Prototype Flow

Describe the user task your prototype demonstrates.

**Starting point:**  
Maya views the mobile trail list and sees the available trail options.

**User action:**  
Maya opens the trail filters and selects difficulty and hike time options.

**System/interface response:**  
The interface applies the selected filters and updates the trail results.

**End state:**  
Maya sees a smaller list of trails that match her selected difficulty and hike time.

---

## 6. Design Rationale

### Decision 1

**Problem:**  
Maya needs to know how long a trail will take before choosing it.

**Design response:**  
Hike time is displayed directly on each trail card alongside the distance.

**Why:**  
This makes the information easy to scan and helps Maya quickly identify trails that fit within about three hours.

### Decision 2

**Problem:**  
Difficulty labels alone did not give Maya enough information.

**Design response:**  
Each difficulty label includes a short description, such as "Some elevation + uneven terrain."

**Why:**  
The additional information gives Maya a better idea of what to expect instead of making her rely on the label alone.

### Decision 3

**Problem:**  
Maya needs to narrow down the available trails quickly.

**Design response:**  
The interface includes filters for difficulty and hike time.

**Why:**  
Filtering allows Maya to focus on trails that match her needs instead of looking through every available trail.

---

## 7. Accessibility Notes

### Accessibility Decision 1

Difficulty is communicated with text and an explanation rather than relying on color alone, so users can understand the information even if they cannot distinguish the colors.

### Accessibility Decision 2

Buttons and filter controls are given clear labels and are large enough to make them easier to identify and interact with, especially on the mobile layout.

---

## Week 8 Handoff

In Week 8, the client moves into a common production starter. You will implement two JavaScript behaviors connected to Maya's needs:

1. an accessible explanation/disclosure for trail difficulty; and
2. form validation and user feedback for a hike-planning form.

Your Week 7 prototype may explore these or another related solution. The important continuity is the user need and interaction reasoning.