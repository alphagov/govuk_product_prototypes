---
layout: techdoc
product: Frontend
primary_nav: frontend
section: styleguide
title: Styleguide

search: true
---

<h1 class="toc-ignore">Style guide</h1>

Examples, code and guidance for all the patterns in GOV.UK Frontend.


# Layout
# Typography
# Colour
# Images
# Icons
# Data

# Forms

## Date of birth


<div class="tabs tabs-code">

  <h3>Demo</h3>
  <div>
  </div>

  <h3>Code</h3>
  <div>
    <pre>
      <code class="language-markup">
&lt;fieldset class="form-group"&gt;
  &lt;legend class="heading-medium"&gt;What is your date of birth?&lt;/legend&gt;
  &lt;div class="form-date"&gt;

    &lt;p&gt;For example, 31 3 1980&lt;/p&gt;

    &lt;div class="form-group form-group-day"&gt;
      &lt;label for="dob-day"&gt;Day&lt;/label&gt;
      &lt;input class="form-control" id="dob-day" name="dob-day" type="number" pattern="[0-9]*" min="0" max="31"&gt;
    &lt;/div&gt;

    &lt;div class="form-group form-group-month"&gt;
      &lt;label for="dob-month"&gt;Month&lt;/label&gt;
      &lt;input class="form-control" id="dob-month" name="dob-month" type="number" pattern="[0-9]*" min="0" max="12"&gt;
    &lt;/div&gt;

    &lt;div class="form-group form-group-year"&gt;
      &lt;label for="dob-year"&gt;Year&lt;/label&gt;
      &lt;input class="form-control" id="dob-year" name="dob-year" type="number" pattern="[0-9]*" min="0" max="2014"&gt;
    &lt;/div&gt;

  &lt;/div&gt;
&lt;/fieldset&gt;</code>
    </pre>
  </div>
</div>

<div class="example">
<fieldset class="form-group">
  <legend class="heading-medium">What is your date of birth?</legend>
  <div class="form-date">

    <p>For example, 31 3 1980</p>

    <div class="form-group form-group-day">
      <label for="dob-day">Day</label>
      <input class="form-control" id="dob-day" name="dob-day" type="number" pattern="[0-9]*" min="0" max="31">
    </div>

    <div class="form-group form-group-month">
      <label for="dob-month">Month</label>
      <input class="form-control" id="dob-month" name="dob-month" type="number" pattern="[0-9]*" min="0" max="12">
    </div>

    <div class="form-group form-group-year">
      <label for="dob-year">Year</label>
      <input class="form-control" id="dob-year" name="dob-year" type="number" pattern="[0-9]*" min="0" max="2014">
    </div>

  </div>
</fieldset>
</div>

# Navigation
# Components
