//MDC VARS
// multiply by conversion factor to go from US units to SI units
// divide by conversion factor to go from SI units to US units

mdc_vars = {
  "drug_dosage": {
    "units_us": "mg",
    "conversion": 1,
    "warn_max": 1001,
    "name": "Drug Dosage",
    "error_max": 5000,
    "warn_min": 0.001,
    "error_min": 0,
    "units_si": "mg"
  },
  "psa": {
    "units_us": "ng/mL",
    "conversion": 1,
    "warn_max": 200,
    "name": "<abbr title='Prostate-Specific Antigen'>PSA</abbr>",
    "error_max": 1000,
    "warn_min": 0.1,
    "error_min": 0,
    "units_si": "ng/mL"
  },
  "protein_urine": {
    "units_us": "mg/dL",
    "conversion": 1,
    "warn_max": 500,
    "name": "Urine Protein",
    "error_max": 1000,
    "warn_min": 1.0,
    "error_min": 0.0,
    "units_si": "mg/dL"
  },
  "cr_urine": {
    "units_us": "mg/dL",
    "conversion": 88.4,
    "warn_max": 450.0,
    "name": "Urine Creatinine",
    "error_max": 700.0,
    "warn_min": 1.0,
    "error_min": 0.0,
    "units_si": "&micro;mol/L"
  },
  "na_urine": {
    "units_us": "mEq/L",
    "conversion": 1,
    "warn_max": 150.0,
    "name": "Urine Sodium",
    "error_max": 300.0,
    "warn_min": 1.0,
    "error_min": 0.0,
    "units_si": "mmol/L"
  },
  "k_urine": {
    "units_us": "mEq/L",
    "conversion": 1,
    "warn_max": 100.0,
    "name": "Urine Potassium",
    "error_max": 300.0,
    "warn_min": 1.0,
    "error_min": 0.0,
    "units_si": "mmol/L"
  },
  "cl_urine": {
    "units_us": "mEq/L",
    "conversion": 1,
    "warn_max": 150.0,
    "name": "Urine Potassium",
    "error_max": 300.0,
    "warn_min": 1.0,
    "error_min": 0.0,
    "units_si": "mmol/L"
  },
  "paco2": {
    "units_us": "mm Hg",
    "conversion": 0.133,
    "warn_max": 60.0,
    "name": "Partial Pressure of CO2",
    "error_max": 150.0,
    "warn_min": 10.0,
    "error_min": 1.0,
    "units_si": "kPa"
  },
  "na": {
    "units_us": "mEq/L",
    "conversion": 1.0,
    "warn_max": 170.0,
    "name": "Sodium",
    "error_max": 200.0,
    "warn_min": 100.0,
    "error_min": 90.0,
    "units_si": "mmol/L"
  },
  "dbp": {
    "units_us": "mm Hg",
    "conversion": 1.0,
    "warn_max": 180.0,
    "name": "Diastolic BP",
    "error_max": 200.0,
    "warn_min": 20.0,
    "error_min": 10.0,
    "units_si": "mm Hg"
  },
  "atm": {
    "units_us": "mm Hg",
    "conversion": 0.133,
    "warn_max": 761.0,
    "name": "Atmospheric Pressure",
    "error_max": 800.0,
    "warn_min": 500.0,
    "error_min": 250.0,
    "units_si": "kPa"
  },
  "age": {
    "units_us": "years",
    "conversion": 1.0,
    "warn_max": 100.0,
    "name": "Age",
    "error_max": 120.0,
    "warn_min": 0.1,
    "error_min": 0.001,
    "units_si": "years"
  },
  "ht": {
    "units_us": "in",
    "conversion": 2.54,
    "warn_max": 80.0,
    "name": "Height",
    "error_max": 90.0,
    "warn_min": 5.0,
    "error_min": 1.0,
    "units_si": "cm"
  },
  "hr": {
    "units_us": "beats per minute",
    "conversion": 1.0,
    "warn_max": 200.0,
    "name": "Heart Rate/Pulse",
    "error_max": 300.0,
    "warn_min": 20.0,
    "error_min": 10.0,
    "units_si": "beats per minute"
  },
  "osm_stool": {
    "units_us": "mOsm/kg",
    "conversion": 1.0,
    "warn_max": 400.0,
    "name": "Stool Osm",
    "error_max": 500.0,
    "warn_min": 250.0,
    "error_min": 200.0,
    "units_si": "mmol/kg"
  },
  "pt_ctrl": {
    "units_us": "sec",
    "conversion": 1.0,
    "warn_max": 16.0,
    "name": "PT Control Value",
    "error_max": 20.0,
    "warn_min": 8.0,
    "error_min": 6.0,
    "units_si": "sec"
  },
  "na_desired": {
    "units_us": "mEq/L",
    "conversion": 0.0,
    "warn_max": 0.0,
    "name": "Desired/Target Sodium",
    "error_max": 0.0,
    "warn_min": 0.0,
    "error_min": 0.0,
    "units_si": "mmol/L"
  },
  "crcl": {
    "units_us": "mL/min",
    "conversion": 1,
    "warn_max": 120.0,
    "name": "Creatinine Clearance",
    "error_max": 130.0,
    "warn_min": 5.0,
    "error_min": 0.0,
    "units_si": "mL/min"
  },
  "pt": {
    "units_us": "sec",
    "conversion": 1.0,
    "warn_max": 50.0,
    "name": "PT ",
    "error_max": 100.0,
    "warn_min": 9.0,
    "error_min": 8.0,
    "units_si": "sec"
  },
  "neut": {
    "units_us": "%",
    "conversion": 1.0,
    "warn_max": 100.0,
    "name": "% Neutrophils",
    "error_max": 101.0,
    "warn_min": 0.0,
    "error_min": -1.0,
    "units_si": "%"
  },
  "bicarb": {
    "units_us": "mEq/L",
    "conversion": 1.0,
    "warn_max": 60.0,
    "name": "Bicarbonate",
    "error_max": 100.0,
    "warn_min": 4.0,
    "error_min": 1.0,
    "units_si": "mmol/L"
  },
  "trig": {
    "units_us": "mg/dL",
    "conversion": 0.0113,
    "warn_max": 1000.0,
    "name": "Triglycerides",
    "error_max": 2000.0,
    "warn_min": 80.0,
    "error_min": 40.0,
    "units_si": "mmol/L"
  },
  "lact": {
    "units_us": "mg/dL",
    "conversion": 0.111,
    "warn_max": 10.0,
    "name": "Lactate",
    "error_max": 40.0,
    "warn_min": 0.2,
    "error_min": 0.1,
    "units_si": "mmol/L"
  },
  "cr": {
    "units_us": "mg/dL",
    "conversion": 88.4,
    "warn_max": 10.0,
    "name": "Creatinine",
    "error_max": 40.0,
    "warn_min": 0.1,
    "error_min": 0.01,
    "units_si": "&micro;mol/L"
  },
  "cl": {
    "units_us": "mEq/L",
    "conversion": 1.0,
    "warn_max": 120.0,
    "name": "Chloride",
    "error_max": 130.0,
    "warn_min": 80.0,
    "error_min": 70.0,
    "units_si": "mmol/L"
  },
  "hgb": {
    "units_us": "g/dL",
    "conversion": 10,
    "warn_max": 20.0,
    "name": "Hemoglobin",
    "error_max": 25.0,
    "warn_min": 4.0,
    "error_min": 0.5,
    "units_si": "g/L"
  },
  "alb": {
    "units_us": "g/dL",
    "conversion": 10.0,
    "warn_max": 6.0,
    "name": "Albumin",
    "error_max": 7.0,
    "warn_min": 1.0,
    "error_min": 0.0,
    "units_si": "g/L"
  },
  "ca": {
    "units_us": "mg/dL",
    "conversion": 0.25,
    "warn_max": 13.0,
    "name": "Calcium",
    "error_max": 18.0,
    "warn_min": 6.0,
    "error_min": 4.0,
    "units_si": "mmol/L"
  },
  "map": {
    "units_us": "mm Hg",
    "conversion": 1.0,
    "warn_max": 180.0,
    "name": "Mean Arterial Pressure",
    "error_max": 210.0,
    "warn_min": 40.0,
    "error_min": 20.0,
    "units_si": "mm Hg"
  },
  "sbp": {
    "units_us": "mm Hg",
    "conversion": 1.0,
    "warn_max": 250.0,
    "name": "Systolic BP",
    "error_max": 300.0,
    "warn_min": 40.0,
    "error_min": 30.0,
    "units_si": "mm Hg"
  },
  "phenytoin": {
    "units_us": "&micro;g/mL",
    "conversion": 3.968,
    "warn_max": 80.0,
    "name": "Phenytoin",
    "error_max": 100.0,
    "warn_min": 0.0,
    "error_min": -1.0e-05,
    "units_si": "µmol/L"
  },
  "bili": {
    "units_us": "mg/dL",
    "conversion": 17.104,
    "warn_max": 20.0,
    "name": "Bilirubin",
    "error_max": 50.0,
    "warn_min": 0.0,
    "error_min": -1.0e-05,
    "units_si": "&micro;mol/L"
  },
  "k": {
    "units_us": "mEq/L",
    "conversion": 1.0,
    "warn_max": 7.0,
    "name": "Potassium",
    "error_max": 10.0,
    "warn_min": 2.0,
    "error_min": 1.0,
    "units_si": "mmol/L"
  },
  "temp": {
    "units_us": "F",
    "conversion": 0.0,
    "warn_max": 108.0,
    "name": "Temperature",
    "error_max": 120.0,
    "warn_min": 30.0,
    "error_min": 20.0,
    "units_si": "C"
  },
  "rr": {
    "units_us": "breaths per minute",
    "conversion": 1.0,
    "warn_max": 70.0,
    "name": "Respiratory Rate",
    "error_max": 90.0,
    "warn_min": 5.0,
    "error_min": 0.0,
    "units_si": "breaths per minute"
  },
  "paw": {
    "units_si": "cm H<sub>2</sub>O",
    "error_min": 0,
    "warn_min": 0.01,
    "error_max": 80,
    "name": "Mean Airway Pressure",
    "warn_max": 40,
    "conversion": 1.3595,
    "units_us": "mmHg",
  },
  "band": {
    "units_us": "%",
    "conversion": 1.0,
    "warn_max": 30.0,
    "name": "% Bands",
    "error_max": 101.0,
    "warn_min": 0.0,
    "error_min": -1.0,
    "units_si": "%"
  },
  "wbc": {
    "units_us": "&times;10<sup>3</sup>/&micro;L",
    "conversion": 1,
    "warn_max": 100.0,
    "name": "White Blood Cell Count",
    "error_max": 500.0,
    "warn_min": 0.1,
    "error_min": 0.0001,
    "units_si": "&times;10<sup>9</sup>/L"
  },
  "glu": {
    "units_us": "mg/dL",
    "conversion": 0.0555,
    "warn_max": 1000.0,
    "name": "Glucose",
    "error_max": 1500.0,
    "warn_min": 50.0,
    "error_min": 1.0,
    "units_si": "mmol/L"
  },
  "sat": {
    "units_us": "%",
    "conversion": 1.0,
    "warn_max": 100.01,
    "name": "O2 Sat",
    "error_max": 100.1,
    "warn_min": 70.0,
    "error_min": 40.0,
    "units_si": "%"
  },
  "urea_urine": {
    "units_us": "mg/dL",
    "conversion": 0.357,
    "warn_max": 700,
    "name": "Urine Urea",
    "error_max": 1000,
    "warn_min": 1,
    "error_min": 0.0,
    "units_si": "mmol/L"
  },
  "retic": {
    "units_us": "%",
    "conversion": 1.0,
    "warn_max": 10.0,
    "name": "% Reticulocytes",
    "error_max": 101.0,
    "warn_min": 0.0,
    "error_min": -1.0,
    "units_si": "%"
  },
  "k_stool": {
    "units_us": "mEq/L",
    "conversion": 1.0,
    "warn_max": 300.0,
    "name": "Stool Potassium",
    "error_max": 1000.0,
    "warn_min": 1.0,
    "error_min": 0.0,
    "units_si": "mmol/L"
  },
  "na_stool": {
    "units_us": "mEq/L",
    "conversion": 1.0,
    "warn_max": 300.0,
    "name": "Stool Sodium",
    "error_max": 1000.0,
    "warn_min": 1.0,
    "error_min": 0.0,
    "units_si": "mmol/L"
  },
  "plt": {
    "units_us": "×10<sup>3</sup>/µL",
    "conversion": 1.0,
    "warn_max": 750.0,
    "name": "Platelet Count",
    "error_max": 1200.0,
    "warn_min": 10.0,
    "error_min": 1.0,
    "units_si": "×10<sup>9</sup>/L"
  },
  "gcs": {
    "units_us": "points",
    "conversion": 1.0,
    "warn_max": 15.0,
    "name": "Glasgow Coma Scale",
    "error_max": 16.0,
    "warn_min": 3.0,
    "error_min": 2.0,
    "units_si": "points"
  },
  "tv": {
    "units_us": "mL",
    "conversion": 1.0,
    "warn_max": 700.0,
    "name": "Tidal Volume",
    "error_max": 1000.0,
    "warn_min": 10.0,
    "error_min": 1.0,
    "units_si": "mL"
  },
  "pao2": {
    "units_us": "mm Hg",
    "conversion": 0.133,
    "warn_max": 600.0,
    "name": "Partial Pressure of Oxygen",
    "error_max": 650.0,
    "warn_min": 10.0,
    "error_min": 1.0,
    "units_si": "kPa"
  },
  "osm": {
    "units_us": "mOsm/kg",
    "conversion": 1.0,
    "warn_max": 350.0,
    "name": "Osmoles (Osm)",
    "error_max": 700.0,
    "warn_min": 270.0,
    "error_min": 200.0,
    "units_si": "mmol/kg"
  },
  "bun": {
    "units_us": "mg/dL",
    "conversion": 0.357,
    "warn_max": 300.0,
    "name": "BUN",
    "error_max": 500.0,
    "warn_min": 2.0,
    "error_min": 1.0,
    "units_si": "mmol/L"
  },
  "hct": {
    "units_us": "%",
    "conversion": 1.0,
    "warn_max": 55.0,
    "name": "Hematocrit",
    "error_max": 70.0,
    "warn_min": 20.0,
    "error_min": 1.0,
    "units_si": "%"
  },
  "wt": {
    "units_us": "lbs",
    "conversion": 2.2,
    "warn_max": 500.0,
    "name": "Weight",
    "error_max": 600.0,
    "warn_min": 0.5,
    "error_min": 0.0,
    "units_si": "kg"
  },
  "qt": {
    "units_us": "msec",
    "conversion": 1.0,
    "warn_max": 650.0,
    "name": "QT Interval",
    "error_max": 700.0,
    "warn_min": 350.0,
    "error_min": 300.0,
    "units_si": "msec"
  },
  "ekg": {
    "units_us": "mm",
    "conversion": 1.0,
    "warn_max": 15.0,
    "name": "EKG Interval",
    "error_max": 30.0,
    "warn_min": 0.000001,
    "error_min": 0,
    "units_si": "mm"
  },
  "fio2": {
    "units_us": "%",
    "conversion": 1.0,
    "warn_max": 100.001,
    "name": "Fraction of Inhaled O2",
    "error_max": 100.01,
    "warn_min": 20.0,
    "error_min": 10.0,
    "units_si": "%"
  },
  "volume": {
    "name": "Volume",
    "units_us": "mL",
    "units_si": "mL",
    "warn_min": 1.0,
    "warn_max": 5000.0,
    "error_min": 0.0,
    "error_max": 20000.0,
    "conversion": 1.0
  },
  "time": {
    "name": "Hours",
    "units_us": "hours",
    "units_si": "hours",
    "warn_min": 0.999,
    "warn_max": 24.001,
    "error_min": 0,
    "error_max": 25,
    "conversion": 1.0
  },
  "cells": {
    "name": "Cells",
    "units_us": "cells/µL",
    "units_si": "×10^9/L",
    "warn_min": 0.999,
    "warn_max": 10000,
    "error_min": 0,
    "error_max": 100000,
    "conversion": 0.001
  },
  "tidalvolume": {
    "name": "Desired Tidal Volume",
    "units_us": "mL/kg",
    "units_si": "mL/kg",
    "warn_min": 0.999,
    "warn_max": 10,
    "error_min": 0,
    "error_max": 20,
    "conversion": 1
  },
  "chol_total": {
    "units_us": "mg/dL",
    "conversion": 0.0259,
    "warn_max": 500.0,
    "name": "Total Cholesterol",
    "error_max": 1000.0,
    "warn_min": 150.0,
    "error_min": 100.0,
    "units_si": "mmol/L"
  },
  "chol_ldl": {
    "units_us": "mg/dL",
    "conversion": 0.0259,
    "warn_max": 300.0,
    "name": "LDL Cholesterol",
    "error_max": 700.0,
    "warn_min": 80.0,
    "error_min": 40.0,
    "units_si": "mmol/L"
  },
  "chol_hdl": {
    "units_us": "mg/dL",
    "conversion": 0.0259,
    "warn_max": 80,
    "name": "HDL Cholesterol",
    "error_max": 150,
    "warn_min": 10,
    "error_min": 1,
    "units_si": "mmol/L"
  },
  "etoh": {
    "name": "Ethanol (ETOH)",
    "units_us": "mg/dL",
    "units_si": "mmoL/L",
    "warn_min": 1,
    "warn_max": 400,
    "error_min": -0.01,
    "error_max": 700,
    "conversion": 0.217
  },
  "hgba1c": {
    "name": "Hemoglobin A1C",
    "units_us": "% gly Hgb",
    "units_si": "% gly Hgb",
    "warn_min": 3,
    "warn_max": 18,
    "error_min": 1,
    "error_max": 30,
    "conversion": 1
  },
  "aagrad": {
    "name": "A-a Gradient",
    "units_us": "mm Hg",
    "units_si": "kPa",
    "warn_min": 1,
    "warn_max": 700,
    "error_min": 0,
    "error_max": 1000,
    "conversion": 0.133
  },
  "ph": {
    "name": "pH",
    "units_us": "",
    "units_si": "",
    "warn_min": 7.0,
    "warn_max": 7.6,
    "error_min": 6.5,
    "error_max": 8.5,
    "conversion": 1
  },
  "ldh": {
    "name": "Serum LDH",
    "units_us": "U/L",
    "units_si": "U/L",
    "warn_min": 120,
    "warn_max": 1000,
    "error_min": 50,
    "error_max": 5000,
    "conversion": 1
  },
  "ldh_pleura": {
    "name": "Pleural Fluid LDH",
    "units_us": "U/L",
    "units_si": "U/L",
    "warn_min": 1,
    "warn_max": 500,
    "error_min": 0,
    "error_max": 2000,
    "conversion": 1
  },
  "ldh_labmax": {
    "name": "Upper Limit of Normal Serum LDH",
    "units_us": "U/L",
    "units_si": "U/L",
    "warn_min": 200,
    "warn_max": 750,
    "error_min": 100,
    "error_max": 751,
    "conversion": 1
  },
  "protein_pleura": {
    "name": "Pleural Fluid Protein",
    "units_us": "g/dL",
    "units_si": "g/L",
    "warn_min": 0.01,
    "warn_max": 6,
    "error_min": -1,
    "error_max": 10,
    "conversion": 10
  },
  "protein_serum": {
    "name": "Total Serum Protein",
    "units_us": "g/dL",
    "units_si": "g/L",
    "warn_min": 0.01,
    "warn_max": 7,
    "error_min": -1,
    "error_max": 20,
    "conversion": 10
  },
  "torr": {
    "name": "Torr",
    "units_us": "torr",
    "units_si": "torr",
    "warn_min": 0.01,
    "warn_max": 50,
    "error_min": -1,
    "error_max": 100,
    "conversion": 1
  },
  "length_si_mm": {
    "name": "Length",
    "units_us": "mm",
    "units_si": "mm",
    "warn_min": 0.1,
    "warn_max": 1000,
    "error_min": 0,
    "error_max": 10000,
    "conversion": 1
  },
  "length_si_cm": {
    "name": "Length",
    "units_us": "cm",
    "units_si": "cm",
    "warn_min": 0.1,
    "warn_max": 1000,
    "error_min": 0,
    "error_max": 10000,
    "conversion": 1
  },
  "ct_slices": {
    "name": "Slices",
    "units_us": "slices",
    "units_si": "slices",
    "warn_min": 0.1,
    "warn_max": 10,
    "error_min": 0,
    "error_max": 100,
    "conversion": 1
  },
  // added by JT 9/10/15
  "spleen": {
    "units_us": "in",
    "conversion": 2.54,
    "warn_max": 50.0,
    "name": "Max distance of spleen from costal margin",
    "error_max": 50.0,
    "warn_min": 0.0,
    "error_min": 0.0,
    "units_si": "cm"
  },
  "basophils": {
    "units_us": "%",
    "conversion": 1.0,
    "warn_max": 100.0,
    "name": "% Basophils",
    "error_max": 101.0,
    "warn_min": 0.0,
    "error_min": -1.0,
    "units_si": "%"
  },
  "eosinophils": {
    "units_us": "%",
    "conversion": 1.0,
    "warn_max": 100.0,
    "name": "% Eosinophils",
    "error_max": 101.0,
    "warn_min": 0.0,
    "error_min": -1.0,
    "units_si": "%"
  },
  "myeloblasts": {
    "units_us": "%",
    "conversion": 1.0,
    "warn_max": 100.0,
    "name": "% Myeloblasts",
    "error_max": 101.0,
    "warn_min": 0.0,
    "error_min": -1.0,
    "units_si": "%"
  },
  "beds": {
    "units_us": "beds",
    "conversion": 1.0,
    "warn_max": 200,
    "name": "Beds",
    "error_max": 10000,
    "warn_min": 1,
    "error_min": -1.0,
    "units_si": "beds"
  },
  "visits": {
    "units_us": "visits/year",
    "conversion": 1.0,
    "warn_max": 200000,
    "name": "Visits Per Year",
    "error_max": 1000000,
    "warn_min": 1000,
    "error_min": -1.0,
    "units_si": "visits/year"
  },
  "patients": {
    "units_us": "patients",
    "conversion": 1.0,
    "warn_max": 100,
    "name": "Patients",
    "error_max": 500,
    "warn_min": 1,
    "error_min": -1.0,
    "units_si": "patients"
  },

  // December 2014 additions by Zain/Max
  "ALT": {
    "units_us": "U/L",
    "conversion": 1.0,
    "warn_max": 4000.0,
    "name": "Alanine Aminotransferase",
    "error_max": 10000.0,
    "warn_min": 4.0,
    "error_min": 0.0,
    "units_si": "U/L"
  },
  "AST": {
    "units_us": "U/L",
    "conversion": 1.0,
    "warn_max": 4000.0,
    "name": "Aspartate Aminotransferase",
    "error_max": 10000.0,
    "warn_min": 4.0,
    "error_min": 0.0,
    "units_si": "U/L"
  },
  "ALP": {
    "units_us": "U/L",
    "conversion": 1.0,
    "warn_max": 200.0,
    "name": "Alkaline Phosphatase",
    "error_max": 400.0,
    "warn_min": 30.0,
    "error_min": 0.0,
    "units_si": "U/L"
  },
  "Stools": {
    "conversion": 1.0,
    "units_si": "stools",
    "units_us": "stools",
    "warn_max": 100.0,
    "name": "Number of Stools",
    "error_max": 1000.0,
  },
  "AST/ALT": {
    "units_us": "ratio",
    "units_si": "ratio",
    "conversion": 1.0,
    "warn_max": 60.0,
    "name": "AST/ALT Ratio",
    "error_max": 100.0,
    "warn_min": 0,
    "error_min": 0,
  },
  "Insulin": {
    "units_us": "mIU/L",
    "conversion": 1.0,
    "warn_max": 50.0,
    "name": "Insulin",
    "error_max": 100.0,
    "warn_min": 1.0,
    "error_min": 0,
    "units_si": "mIU/L"
  },
  "BMI": {
    "units_us": "kg/m<sup>2</sup>",
    "conversion": 1,
    "warn_max": 60,
    "name": "Body Mass Index",
    "error_max": 100,
    "warn_min": 10.0,
    "error_min": 0,
    "units_si": "kg/m<sup>2</sup>"
  },
  "ten": {
    "units_us": "",
    "conversion": 1,
    "warn_max": 9,
    "name": "ten",
    "error_max": 10,
    "warn_min": 0,
    "error_min": 0,
    "units_si": ""
  },
  "age_months_imm": {
    "units_us": " ",
    "conversion": 1,
    "warn_max": 24,
    "name": "Age in months",
    "error_max": 36,
    "warn_min": 0,
    "error_min": 0,
    "units_si": " "
  },
  "age_years_imm": {
    "units_us": " ",
    "conversion": 1.0,
    "warn_max": 100.0,
    "name": "Age in years",
    "error_max": 120.0,
    "warn_min": 0.1,
    "error_min": 0.001,
    "units_si": " "
  }
};

// MDC.JS

/*
Author: Chiedo John
Author site: www.chiedojohn.com
*/


function mdcWt(unit) {
  wt = mdcVal("#wt");
  currUnit = $('.mdc-wt-select option:selected').val();

  if (unit == currUnit) {
    wt = wt;
  }
  if (unit == 'lb' && currUnit == 'kg') {
    wt = wt * 2.2;
  }
  if (unit == 'kg' && currUnit == 'lb') {
    wt = wt / 2.2;
  }
  if (unit == 'lb' && currUnit == 'g') {
    wt = wt / 2200;
  }
  if (unit == 'kg' && currUnit == 'g') {
    wt = wt / 1000;
  }
  return wt;
}

var console = console || {
  "log": function() {}
}; // ie8 console nonsense

//load the mdc_vars.js script first
if (typeof mdc_system_us == 'undefined') var mdc_system_us = true;
var i; // This will be used in all for loops. IE bug fix
var typing_timer;
var done_typing_interval = 300;
var sliderToMove = false;


(function($) {
  $.mdc = function() {
    setup();
    makeInteractive();
    updateInputs();
    calculateConditional();
    $("#mdcsystem").parent().find(".mdc-label").first().remove();

    /*
     *This is used to dynamically replace/switch the SI and US units on an equation
     */
    if (mdc_system_us) {
      $(".us-units").show()
      $(".si-units").hide()
    } else {
      $(".us-units").hide()
      $(".si-units").show()

    }

    $(".mdc-toggle").click(function() {
      if (mdc_system_us) {
        $(".us-units").show()
        $(".si-units").hide()
      } else {
        $(".us-units").hide()
        $(".si-units").show()

      }
    });

    /* This function just returns a string of attribute initializations in
     * the format: id='3' coolness='true' etc.*/
    function getMdcAttrs(elem) {
      result = "";

      if (elem.attr('id')) result += "id='" + elem.attr('id') + "' ";
      if (elem.attr('mdctype')) result += "mdctype='" + elem.attr('mdctype') +
        "' ";
      if (elem.attr('val')) result += "val='" + elem.attr('val') + "' ";
      if (elem.attr('calc')) result += "calc='" + elem.attr('calc') + "' ";
      if (elem.attr('off')) result += "off='" + elem.attr('off') + "' ";
      if (elem.attr('on')) result += "on='" + elem.attr('on') + "' ";
      if (elem.attr('points')) result += "points='" + elem.attr('points') +
        "' ";
      if (elem.attr('showpoints')) result += "showpoints='" + elem.attr(
        'showpoints') + "' ";
      if (elem.attr('unit')) result += "unit='" + elem.attr('unit') + "' ";
      if (elem.attr('addme')) result += "addme='" + elem.attr('addme') +
        "' ";
      if (elem.attr('incr')) result += "incr='" + elem.attr('incr') + "' ";
      if (elem.attr('question')) result += "question='" + escape(elem.attr(
        'question')) + "' ";
      if (elem.attr('question-sub')) result += "question-sub='" + escape(
        elem.attr('question-sub')) + "' ";
      if (elem.attr('optional')) result += "optional='" + elem.attr(
        'optional') + "' ";
      if (elem.attr('max')) result += "max='" + elem.attr('max') + "' ";
      if (elem.attr('min')) result += "min='" + elem.attr('min') + "' ";
      if (elem.attr('shownIncrement')) result += "shownIncrement='" + elem.attr(
        'shownIncrement') + "' ";
      if (elem.attr('scrollIncrement')) result += "scrollIncrement='" +
        elem.attr('scrollIncrement') + "' ";


      return result;
    }

    /* handles the conversion of the forms from how they were input to mdc format */
    function setup() {
      $(".mdc-form").children().each(function() {
        unit = $(this).attr("unit");
        if (typeof unit !== 'undefined' && unit !== false) {
          c = mdc_vars[unit];
          mdc_name = c["name"];
          mdc_warn_min = c["warn_min"];
          mdc_warn_max = c["warn_max"];
          mdc_error_min = c["error_min"];
          mdc_error_max = c["error_max"];
          mdc_conversion = c["conversion"];

          if (mdc_system_us) {
            mdc_units = c["units_us"];
          } else {
            mdc_units = c["units_si"];
            mdc_warn_min = mdc_warn_min * mdc_conversion;
            mdc_warn_max = mdc_warn_max * mdc_conversion;
            mdc_error_min = mdc_error_min * mdc_conversion;
            mdc_error_max = mdc_error_max * mdc_conversion;
          }
        }

        // depending on what type of mdc element is located, convert it to it's necessary format
        var question_sub;
        if (typeof $(this).attr("question-sub") !== "undefined")
          question_sub = "<div class='label-sub'>" + unescape($(this).attr(
            "question-sub")) + "</div></div>";
        else question_sub = "</div>";

        switch ($(this).attr("class")) {
          case "mdc-selectbox":
            /*$(this).before("<div class='mdc-container'>\
                <div class='mdc-label'>"+$(this).attr("question")+question_sub);
            $(this).after("<div class='clear'></div>\
                <div class='mdc-message-pane'></div>\
              </div>");
            break;  */
            $(this).replaceWith(
              "\
              <div class='mdc-container'>\
                <div class='mdc-label'>" +
              $(this).attr("question") + question_sub +
              "<div class='mdc-selectbox'>" + $(this).html() +
              "</div>\
                <div class='clear'></div>\
                <div class='mdc-message-pane'></div></div>\
            "
            );
            break;
          case "mdc-slider-with-input":
            $(this).replaceWith(
              "\
              <div class='mdc-container'>\
                <div class='mdc-label mdc-slider-label'>" +
              $(this).attr("question") + question_sub +
              "<div class='mdc-labeled-input mdc-slider-bar mdc-slider-with-input' " +
              getMdcAttrs($(this)) +
              ">\
                  <input type='text' class='mdc-text-input' />\
                  <div class='mdc-slider-progress'></div>\
                  <div class='mdc-ball'>\
                    <div class='mdc-value-display'></div>\
                  </div>\
                </div>\
                <div class='clear'></div>\
                <div class='mdc-message-pane'></div>\
              </div>\
            "
            );
            break;
          case "mdc-slider-with-range":
            var intervalDiv = "";
            var hiddenIntervalDiv = "";
            var min = 0;
            var max = 10;
            var interval = 1;
            var padding = 0;
            var hiddenPadding = 0;
            var currentPosition = 0;

            min = parseInt($(this).attr("min"));
            max = parseInt($(this).attr("max"));
            interval = parseInt($(this).attr("shownIncrement"));
            hiddenInterval = parseInt($(this).attr("scrollIncrement"));

            for (i = min; i <= max; i += interval) {
              padding = (i / max) * 100;
              if (padding == 0) padding = 1;
              if (padding == 100) padding = 99;
              intervalDiv +=
                "<div class='mdc-slider-interval' style='margin-left:" +
                padding + "%;'>" + i + "</div>";
            }

            for (i = min; i <= max; i += hiddenInterval) {
              hiddenPadding = (i / max) * 100;
              if (padding == 0) padding = 1;
              if (padding == 100) padding = 99;
              hiddenIntervalDiv +=
                "<div class='mdc-slider-interval-hidden' id='" + i +
                "' padding='" + hiddenPadding + "''></div>";
            }


            $(this).replaceWith(
              "\
              <div class='mdc-container' optional='" +
              $(this).attr("optional") +
              "' >\
                <div class='mdc-label mdc-slider-label'>" +
              $(this).attr("question") + question_sub +
              "<div class='mdc-labeled-input mdc-slider-bar' " +
              getMdcAttrs($(this)) +
              ">\
                  <div class='mdc-ball'></div>\
                  <div class='mdc-slider-progress'></div>\
                  <div class='mdc-intervals'>" +
              intervalDiv +
              "</div>\
                  <div class='mdc-intervals-hidden'>" +
              hiddenIntervalDiv +
              "</div>\
                </div>\
                <div class='clear'></div>\
                <div class='mdc-message-pane'></div>\
              </div>\
            "
            );

            //Slider bar slide functions
            $("body").on("mousedown", '.mdc-ball', function(e) {
              sliderToMove = $(this);
              leftOffSet = $(".mdc-slider-progress").offset().left
              maxWidth = $(".mdc-slider-progress").width();
            });

            $("body").on("mousemove", function(e) {
              if (sliderToMove) {
                if (e.clientX - leftOffSet < 0) {
                  currentPosition = parseInt((e.clientX -
                    leftOffSet) / maxWidth * 100);
                  sliderToMove.css({
                    'margin-left': 0
                  });
                } else if (e.clientX - leftOffSet > maxWidth) {
                  currentPosition = parseInt((e.clientX -
                    leftOffSet) / maxWidth * 100);
                  sliderToMove.css({
                    'margin-left': '99%'

                  });
                } else {
                  currentPosition = parseInt((e.clientX -
                    leftOffSet) / maxWidth * 100);
                  sliderToMove.css({
                    'margin-left': e.clientX - leftOffSet
                  });
                }
              }
            });

            $("body").on("mouseup", function(e) {
              var stored = 99;
              var temp = 0;
              var val;

              $(".mdc-slider-interval-hidden").each(function() {
                temp = parseInt($(this).attr("padding"));
                if (Math.abs(currentPosition - temp) < Math.abs(
                    currentPosition - stored)) {
                  stored = temp;
                  val = $(this).attr("id");
                }
              });
              if (sliderToMove) {
                $(sliderToMove).closest(".mdc-slider-bar").attr(
                  "val", val);
                sliderToMove.css({
                  'margin-left': stored + '%'
                });
              }


              sliderToMove = false;
            });

            $('.mdc-slider-progress').click(function(e) {
              var stored = 99;
              var temp = 0;
              var val;
              leftOffSet = $(this).offset().left
              maxWidth = $(this).width();
              currentPosition = parseInt((e.clientX - leftOffSet) /
                maxWidth * 100);
              sliderToMove = $(this).prev('.mdc-ball');

              $(".mdc-slider-interval-hidden").each(function() {
                temp = parseInt($(this).attr("padding"));
                if (Math.abs(currentPosition - temp) < Math.abs(
                    currentPosition - stored)) {
                  stored = temp;
                  val = $(this).attr("id");
                }
              });

              $(sliderToMove).closest(".mdc-slider-bar").attr("val",
                val);
              sliderToMove.css({
                'margin-left': stored + '%'
              });

              sliderToMove = false;

            });

            $(".mdc-slider-interval").click(function() {
              var style = $(this).attr("style");
              console.dir($(this).parent().prev().prev());
              $(this).parent().prev().prev().attr("style", style);
            });

            break;
          case "mdc-date-field":
            if (typeof $(this).attr("question") !== 'undefined')
              question = $(this).attr("question");
            else question = "Date";

            $(this).replaceWith(
              "\
              <div class='mdc-container' optional='" +
              $(this).attr("optional") +
              "' >\
                <div class='mdc-label'>" +
              question + "<br /><div class='label-sub'>" +
              question_sub +
              "</div></div>\
                <div class='mdc-date-field'>\
                  <input type='text' class='mdc-labeled-input mdc-text-input mdc-date-input' " +
              getMdcAttrs($(this)) +
              " />\
                </div>\
                <div class='clear'></div>\
                <div class='mdc-message-pane'></div>\
                <div class='mdc-points-pane'></div>\
              </div>\
            "
            );
            break;
          case "mdc-text-field-unitless":
            if (typeof $(this).attr("question") !== 'undefined')
              question = $(this).attr("question");
            else question = "Add a question";

            $(this).replaceWith(
              "\
              <div class='mdc-container' optional='" +
              $(this).attr("optional") +
              "' >\
                <div class='mdc-label'>" +
              question + question_sub +
              "<div class='mdc-text-field-unitless'>\
                  <input type='text' class='mdc-labeled-input mdc-text-input mdc-text-input-unitless' " +
              getMdcAttrs($(this)) +
              " />\
                </div>\
                <div class='clear'></div>\
                <div class='mdc-message-pane'></div>\
                <div class='mdc-points-pane'></div>\
              </div>\
            "
            );
            break;
          case "mdc-text-field":
            if (typeof $(this).attr("question") !== 'undefined')
              question = $(this).attr("question");
            else question = mdc_name;

            if ($(this).attr("unit") == "temp") {
              c = new Array("F", "C");
              options = "";
              for (i = 0; i < c.length; i++) {
                options += "<option value ='" + c[i] + "'>" + c[i] +
                  "</option>";
              }

              $(this).replaceWith(
                "\
                <div class='mdc-container' optional='" +
                $(this).attr("optional") +
                "' >\
                  <div class='mdc-label test'>" +
                question + question_sub +
                "<div class='mdc-text-field mdc-short-text-field'>\
                    <input type='text' class='mdc-labeled-input mdc-text-input mdc-temp-input' " +
                getMdcAttrs($(this)) +
                " />\
                    <select class='mdc-temp-select'>\
                    " +
                options +
                "\
                    </select>\
                  </div>\
                  <div class='clear'></div>\
                  <div class='mdc-message-pane mdc-short-message-pane'></div>\
                  <div class='mdc-points-pane'></div>\
                </div>\
              "
              );
            } else if ($(this).attr("unit") == "wt") {
              c = new Array("lb", "kg", "g");
              options = "";
              for (i = 0; i < c.length; i++) {
                options += "<option value ='" + c[i] + "'>" + c[i] +
                  "</option>";
              }

              $(this).replaceWith(
                "\
                <div class='mdc-container' optional='" +
                $(this).attr("optional") +
                "' >\
                  <div class='mdc-label' id='label-wt'>" +
                question + question_sub +
                "<div class='mdc-text-field mdc-short-text-field'>\
                    <input type='text' class='mdc-labeled-input mdc-text-input mdc-wt-input' " +
                getMdcAttrs($(this)) +
                " />\
                    <select class='mdc-wt-select mdc-select'>\
                    " +
                options +
                "\
                    </select>\
                  </div>\
                  <div class='clear'></div>\
                  <div class='mdc-message-pane'></div>\
                  <div class='mdc-points-pane'></div>\
                </div>\
              "
              );
            } else {
              $(this).replaceWith(
                "\
                <div class='mdc-container' optional='" +
                $(this).attr("optional") +
                "' >\
                  <div class='mdc-label test3'>" +
                question + question_sub +
                "<div class='mdc-text-field'>\
                    <input type='text' class='mdc-labeled-input mdc-text-input' " +
                getMdcAttrs($(this)) +
                " />\
                    <div class='mdc-text-field-units'>" +
                mdc_units +
                "</div>\
                  </div>\
                  <div class='clear'></div>\
                  <div class='mdc-message-pane'></div>\
                  <div class='mdc-points-pane'></div>\
                </div>\
              "
              );
            }

            break;
          case "mdc-toggle":
            off = "no";
            on = "yes";
            if ($(this).attr("off")) off = $(this).attr("off");
            if ($(this).attr("on")) on = $(this).attr("on");
            var pointstoshow;
            if ($(this).attr("points") && $(this).attr("showpoints") !=
              "false") pointstoshow = $(this).attr("points");
            else pointstoshow = "";
            if (parseInt(pointstoshow, 0) > 0) pointstoshow = "+" +
              pointstoshow;

            $(this).replaceWith(
              "\
              <div class='mdc-container' optional='" +
              $(this).attr("optional") +
              "' >\
                <div class='mdc-label'>" + $(this)
              .attr("question") + question_sub +
              "<div class='mdc-labeled-input mdc-toggle' " +
              getMdcAttrs($(this)) +
              ">\
                  <div class='mdc-toggle-yes mdc-toggle-val'>" +
              on +
              "</div>\
                  <div class='mdc-toggle-no mdc-toggle-val'>" +
              off +
              "</div>\
                  <div class='mdc-toggle-button'></div>\
                </div>\
                <div class='mdc-points-pane for-toggle'>" +
              pointstoshow +
              "</div>\
                <div class='clear'></div>\
              </div>\
              "
            );
            break;
          case "mdc-radiogroup":
            if ($(this).attr("hor") == "true") extraclass =
              "mdc-horizontal";
            else extraclass = "mdc-vertical";
            inputs = "";

            $(this).find("input").each(function() {
              var pointstoshow;
              if ($(this).attr("points") && $(this).attr(
                  "showpoints") != "false") pointstoshow = $(this).attr(
                "points");
              else pointstoshow = "";
              if (parseInt(pointstoshow, 0) > 0) pointstoshow = "+" +
                pointstoshow;

              selected = $(this).attr("val") == "1" ? "selected" :
                "";
              inputs += "<div class='mdc-input-wrap " + selected +
                "' val ='" + $(this).attr("val") +
                "'><div class='mdc-radio mdc-group-input " +
                selected + "'" + getMdcAttrs($(this)) + "></div>" +
                $(this).attr('text') +
                "<div class='mdc-points-pane'>" + pointstoshow +
                "</div>" + "</div>";
            });

            $(this).replaceWith(
              "\
              <div class='mdc-container' optional='" +
              $(this).attr("optional") +
              "' >\
                <div class='mdc-label radio-label'>" +
              $(this).attr("question") + question_sub +
              "<div class='mdc-group mdc-radiogroup " + extraclass +
              "'" + getMdcAttrs($(this)) + ">" + inputs +
              "</div>\
                <div class='clear'></div>\
              </div>\
            "
            );
            break;
          case "mdc-checkgroup":
            if ($(this).attr("hor") == "true") extraclass =
              "mdc-horizontal";
            else extraclass = "mdc-vertical";
            inputs = "";

            $(this).find("input").each(function() {
              var pointstoshow;
              if ($(this).attr("points") && $(this).attr(
                  "showpoints") != "false") pointstoshow = $(this).attr(
                "points");
              else pointstoshow = "";
              if (parseInt(pointstoshow, 0) > 0) pointstoshow = "+" +
                pointstoshow;
              selected = $(this).attr("val") == "1" ? "selected" :
                "";
              inputs += "<div class='mdc-input-wrap " + selected +
                "' val ='" + $(this).attr("val") +
                "'><div class='mdc-checkbox mdc-group-input " +
                selected + "'" + getMdcAttrs($(this)) + "></div>" +
                $(this).attr('text') +
                "<div class='mdc-points-pane'>" + pointstoshow +
                "</div>" + "</div>";
            });

            $(this).replaceWith(
              "\
              <div class='mdc-container' optional='" +
              $(this).attr("optional") +
              "' >\
                <div class='mdc-label'>" + $(this)
              .attr("question") + question_sub +
              "<div class='mdc-group mdc-checkgroup " + extraclass +
              "'" + getMdcAttrs($(this)) + ">" + inputs +
              "</div>\
                <div class='clear'></div>\
              </div>\
            "
            );
            break;
          case "mdc-result-box":
            $(this).replaceWith(
              "\
              <div class='mdc-container' >\
                <div class='mdc-result-box' " +
              getMdcAttrs($(this)) +
              ">\
                  <div class='mdc-points'></div>\
                  <div class='mdc-points-units'></div>\
                  <div class='mdc-points-text'></div>\
                </div>\
              </div>\
            "
            );
            break;
          default:
            break;
        }
      });
    }

    function makeInteractive() {
      $('.mdc-radiogroup .mdc-input-wrap').click(function() {
        $(this).closest(".mdc-container").attr("modified", "true");
        //Add attribute to clicked
        $(this).attr("val", "1");
        $(this).addClass("selected");
        $(this).find(".mdc-group-input").first().attr("val", "1");
        $(this).find(".mdc-group-input").first().addClass("selected");

        //Remove attribute from others
        $(this).siblings().attr('val', '0');
        $(this).siblings().removeClass('selected');

        $(this).siblings().each(function() {
          $(this).find(".mdc-group-input").first().attr('val', '0');
          $(this).find(".mdc-group-input").first().removeClass(
            'selected');
        });
        calculateConditional();
      });

      $('.mdc-checkgroup .mdc-input-wrap').click(function() {
        $(this).closest(".mdc-container").attr("modified", "true");
        opposite = $(this).attr("val") === "1" ? "0" : "1";
        if (opposite === "1") {
          $(this).addClass("selected");
          $(this).find(".mdc-group-input").first().addClass("selected");
        } else {
          $(this).removeClass("selected");
          $(this).find(".mdc-group-input").first().removeClass(
            "selected");
        }
        $(this).attr("val", opposite);
        $(this).find(".mdc-group-input").first().attr("val", opposite);
        calculateConditional();
      });

      $('.mdc-toggle').click(function() {
        $(this).closest(".mdc-container").attr("modified", "true");
        opposite = $(this).attr("val") === "1" ? "0" : "1";

        if (opposite === "1") $(this).addClass("selected");
        else $(this).removeClass("selected");
        $(this).attr("val", opposite);

        if ($(this).attr("id") == "mdcsystem") {
          $(this).attr("val") === "1" ? mdc_system_us = false :
            mdc_system_us = true;
          if (mdc_system_us) x = "true";
          else x = "false";

          //These lines change which option is selected
          $(".mdc-temp-select").each(function() {
            if (mdc_system_us) $(this).prop('selectedIndex', 0);
            else $(this).prop('selectedIndex', 1);
          });

          $(".mdc-wt-select").each(function() {
            if (mdc_system_us) $(this).prop('selectedIndex', 0);
            else $(this).prop('selectedIndex', 1);
          });


          setFullCookie("mdc_system_us", x, 365);

          updateInputs();

          //This triggers the updates on the select boxes
          $(".mdc-select").each(function() {
            triggerSelectChange($(this));
          });
        }
        calculateConditional();

      });

      $('.mdc-text-input').keyup(function() {
        $(this).closest(".mdc-container").attr("modified", "true");
        cc = $(this);

        typing_timer = setTimeout(function() {
          validate(cc);
        }, done_typing_interval);

      });

      $('.mdc-text-input').keydown(function() {
        clearTimeout(typing_timer);
      });


      $('.mdc-select').change(function() {
        triggerSelectChange($(this));
      });


      $(
        '.mdc-text-input,.mdc-select,.mdc-radiogroup .mdc-input-wrap,.mdc-checkgroup .mdc-input-wrap, .mdc-toggle'
      ).blur(function() {
        validate($(this));
      });


    }

  };

})(jQuery);

function updateTempInput(elem) {}

function updateWtInput(elem) {}

function updateVal(elem) {

  if (elem.hasClass("mdc-temp-input")) {
    selectbox = elem.siblings().first();
    input = parseFloat(elem.val());
    if (selectbox.hasClass("mdc-temp-select")) {
      selected = selectbox.find("option:selected");
      switch (selected.text()) {
        case "F":
          elem.attr("val", input);
          break;
        case "C":
          elem.attr("val", getC(input));
          break;
        default:
          break;
      }
    }
  } else if (elem.hasClass("mdc-wt-input")) {

    selectbox = elem.siblings().first();
    input = parseFloat(elem.val());
    if (selectbox.hasClass("mdc-wt-select")) {
      selected = selectbox.find("option:selected");

      switch (selected.text()) {
        case "lb":
          elem.attr("val", input);
          break;
        case "kg":
          elem.attr("val", input);
          break;
        case "g":
          elem.attr("val", input);
          break;
        default:
          break;
      }
    }
  } else if (elem.hasClass("mdc-date-input")) {
    elem.attr("val", elem.val());
  } else if (elem.hasClass("mdc-text-input-unitless")) {
    elem.attr("val", elem.val());
  } else {
    c = mdc_system_us ? 1 : mdc_vars[elem.attr("unit")]["conversion"];
    // If the system is SI, the value of the input will still show US measurement, but the textbox will show SI
    elem.attr("val", parseFloat(elem.val()) / c);
  }
}

function validate(elem) {
  if (elem.hasClass("mdc-text-input-unitless")) {
    updateVal(elem);
    calculateConditional();
    return;
  }

  c = mdc_vars[elem.attr("unit")];
  conversion = 1;
  if (typeof c === 'undefined') return; //return if validate was called at a bad time

  if (!mdc_system_us) conversion = c["conversion"];

  if (elem.hasClass("mdc-wt-input")) {
    selectbox = elem.siblings().first();
    input = parseFloat(elem.val());
    if (selectbox.hasClass("mdc-wt-select")) {
      selected = selectbox.find("option:selected");
      switch (selected.text()) {
        case "lb":
          conversion = 1;
          break;
        case "kg":
          conversion = 1;
          break;
        case "g":
          conversion = 1;
          break;
        default:
          break;
      }
    }
  }

  if (elem.hasClass("mdc-temp-input")) {
    selectbox = elem.siblings().first();
    input = parseFloat(elem.val());
    if (selectbox.hasClass("mdc-temp-select")) {
      selected = selectbox.find("option:selected");
      switch (selected.text()) {
        case "F":
          val = parseFloat(elem.val()) * conversion;
          error_min = c["error_min"] * conversion;
          error_max = c["error_max"] * conversion;
          warn_min = c["warn_min"] * conversion;
          warn_max = c["warn_max"] * conversion;
          break;
        case "C":
          val = getC(parseFloat(elem.val()));
          error_min = getC(c["error_min"]);
          error_max = getC(c["error_max"]);
          warn_min = getC(c["warn_min"]);
          warn_max = getC(c["warn_max"]);
          break;
        default:
          break;
      }
    }
  } else if (!elem.hasClass("mdc-date-input") && !elem.hasClass(
      "mdc-text-input-unitless")) {
    val = parseFloat(elem.val());
    error_min = c["error_min"] * conversion;
    error_max = c["error_max"] * conversion;
    warn_min = c["warn_min"] * conversion;
    warn_max = c["warn_max"] * conversion;
  }

  if (elem.val() === "" && (elem.closest(".mdc-container").attr("optional") !=
      "true")) {
    mdcFormatError(elem, "You must enter a value.");
    elem.closest(".mdc-container").css('padding-bottom', '15px');

    return;
  }

  if (!elem.hasClass("mdc-date-input") && !elem.hasClass(
      "mdc-text-input-unitless")) {
    if (elem.val() === "") {
      mdcClearMessagePane(elem);
      return;
    } else if (isNaN(val)) {
      mdcFormatError(elem, "Please enter a number.");
      elem.closest(".mdc-container").css('padding-bottom', '15px');

      return;
    } else if (val < error_min) {
      mdcMinError(elem);
      elem.closest(".mdc-container").css('padding-bottom', '15px');

      $('.mdc-result-box div').each(function() {
        $(this).text('');
      });
      return false;
    } else if (val > error_max) {
      mdcMaxError(elem);
      elem.closest(".mdc-container").css('padding-bottom', '15px');

      $('.mdc-result-box div').each(function() {
        $(this).text('');
      });
      return false;
    } else if (val < warn_min) {
      mdcMinWarn(elem);
      elem.closest(".mdc-container").css('padding-bottom', '15px');

    } else if (val > warn_max) {
      mdcMaxWarn(elem);
      elem.closest(".mdc-container").css('padding-bottom', '15px');
    } else {
      mdcClearMessagePane(elem);
      elem.closest(".mdc-container").css('padding-bottom', '10px');

    }
  }
  updateVal(elem);
  calculateConditional();
}

function getC(fahren) {
  return (fahren - 32) * (5 / 9);
}

function getKG(lb) {
  return lb / mdc_vars["wt"]["conversion"];

}

function getG(lb) {
  return lb / mdc_vars["wt"]["conversion"] * 1000;
}

function mdcClearMessagePane(c) {
  var messagepane;
  messagepane = c.closest(".mdc-container").find(".mdc-message-pane").first();
  messagepane.text("");
}

function mdcMaxError(c) {
  var messagepane;
  messagepane = c.closest(".mdc-container").find(".mdc-message-pane").first();
  messagepane.text("You entered a value too large.");
  messagepane.css("color", "red");
}

function mdcMinError(c) {
  var messagepane;
  messagepane = c.closest(".mdc-container").find(".mdc-message-pane").first();
  messagepane.text("You entered a value too small.");
  messagepane.css("color", "red");
}

function mdcFormatError(c, j) {
  var messagepane;
  messagepane = c.closest(".mdc-container").find(".mdc-message-pane").first();
  messagepane.text(j);
  messagepane.css("color", "red");
}

function mdcMinWarn(c) {
  var messagepane;
  messagepane = c.closest(".mdc-container").find(".mdc-message-pane").first();
  messagepane.text("Your value might be a little too small.");
  messagepane.css("color", "#FF8000");
}

function mdcMaxWarn(c) {
  var messagepane;
  messagepane = c.closest(".mdc-container").find(".mdc-message-pane").first();
  messagepane.text("Your value might be a little too large.");
  messagepane.css("color", "#FF8000");
}

function mdcShow(c) {
  $(c).closest(".mdc-container").show();
}

function mdcHide(c) {
  $(c).closest(".mdc-container").hide();
}

function mdcVal(c) {
  var result;

  if ($(c).hasClass("mdc-date-input")) result = $(c).attr("val");
  else if (isNaN($(c).attr("val"))) result = 0;
  else result = parseFloat($(c).attr("val"));

  return result;
}

function mdcValByPoints(c) {
  var result;
  result = 0;
  if ($(c).hasClass("mdc-toggle")) {
    if (mdcVal(c) == 1) result = $(c).attr("points");
  } else if ($(c).hasClass("mdc-checkgroup")) {

    $(c).find(".mdc-group-input.selected").each(function() {
      result += parseInt($(this).attr("points"));
    });

  } else if ($(c).hasClass("mdc-radiogroup")) {
    if ($(c).find(".mdc-group-input.selected").length > 0) {
      $(c).find(".mdc-group-input.selected").each(function() {
        result += parseInt($(this).attr("points"));
      });

    } else {
      result = -1;
    }
  }


  return parseInt(result);
}

function mdcSetPoints(id, points, units, precision) {
  $(id).find(".mdc-points").first().html(points.toFixed(precision));
  $(id).find(".mdc-points-units").first().html(units);
}

function mdcSetPointsAsString(id, points) {
  $(id).find(".mdc-points").first().html(points);
}

function mdcSetPointsText(id, text, only) {
  $(id).find(".mdc-points-text").first().html(text);
  if (only) {
    $(id).find(".mdc-points").first().hide();
    $(id).find(".mdc-points-units").first().hide();
  }
}

function calculateConditional() {
  keepgoinga = true;

  //check to see if all fields all filled out before calculating
  $(".mdc-container").each(function() {
    if ($(this).attr("optional") != "true") {
      if (($(this).find(".mdc-group").length > 0 && $(this).find(
          ".mdc-group .mdc-input-wrap.selected").length < 1) ||
        ($(this).find(".mdc-text-input").length > 0 && $(this).find(
          ".mdc-text-input").first().val() === "")) {
        if ($(this).find(".mdc-toggle").length != 1) keepgoinga = false;
      }
    }
  });
  if (keepgoinga) {
    calculatePoints();
  }
}

function triggerSelectChange(elem) {
  elem.closest(".mdc-container").attr("modified", "true");
  var c = elem.find(":selected").text();
  var m = elem.closest(".mdc-text-field").find(".mdc-text-input").first();
  var j = parseFloat(m.attr("val"));

  if (typeof m.attr("val") !== 'undefined') {

    //precision setting
    arrr = m.val().split(".");
    if (arrr.length > 1) {
      precision = arrr[1].length;
    } else {
      precision = 0;
    }

    switch (c) {
      case "F":
        m.val(j.toFixed(precision));
        break;
      case "C":
        m.val(getC(j).toFixed(precision));
        break;
        // case "lb":
        //   m.val(j.toFixed(precision));
        //   break;
        // case "kg":
        //   m.val(getKG(j).toFixed(precision));
        //   break;
        // case "g":
        //   m.val(getG(j).toFixed(precision));
        //   break;
      default:
        break;
    }
  }
  calculateConditional();
}

function updateInputs() {
  if (mdc_system_us) unit_type = "units_us";
  else unit_type = "units_si";


  $('.mdc-toggle').each(function() {
    if ($(this).attr("val") == "1") {
      $(this).addClass("selected");
    }
  });

  $('.mdc-text-field').each(function() {
    var j;
    var unit_abbr;
    var c;
    var precision;

    //precision setting
    arrr = $(this).find(".mdc-text-input").first().val().split(".");
    if (arrr.length > 1) {
      precision = arrr[1].length;
    } else {
      precision = 0;
    }

    if (!$(this).hasClass("mdc-short-text-field")) {
      unit_abbr = $(this).find(".mdc-text-input").first().attr("unit");

      c = 1;
      if (!mdc_system_us) c = mdc_vars[unit_abbr]["conversion"];
      j = parseFloat($(this).find(".mdc-text-input").first().attr("val")) *
        c;
      $(this).find(".mdc-text-field-units").first().html(mdc_vars[unit_abbr]
        [unit_type]);

      if (!isNaN(j)) {
        $(this).find(".mdc-text-input").first().val(j.toFixed(precision));

      }
    } else if ($(this).hasClass("mdc-short-text-field")) {
      j = parseFloat($(this).find(".mdc-text-input").first().attr("val"));
      if (!isNaN(j)) {
        $(this).find(".mdc-text-input").first().val(j.toFixed(precision));
      }

    }
  });
}



// API
var submitValid = false;

jQuery(document).ready(function($) {
  // global jQuery
  var windowURL = window.location.search;
  $('a').each(function() {
    var linkURL = $(this).attr('href');
    if (linkURL != null && linkURL.substring(0, 1) !== "#") {
      appendURL = windowURL;

      if (linkURL.split('?').length > 1) {
        var usernameIndex = linkURL.split('?')[1].search('user=');
        var apiKeyIndex = linkURL.split('?')[1].search('key=');
        if (usernameIndex >= 0 && apiKeyIndex >= 0 && apiKeyIndex >
          usernameIndex) { // if link already has user and key parameters, then don't append to link
          appendURL = "";
          //console.log('no paremeters appended');
        } else {
          appendURL += "?" + linkURL.split('?')[1];
          linkURL = linkURL.split('?')[0];
          //console.log('reorganized url parameters');
        }
      }

      linkURL += appendURL;
      $(this).attr('href', linkURL);
    }
  });



  // jQuery specific to api settings page
  var apiKeys = [];
  $('.api-key-value').each(function() {
    apiKeys.push($(this).val()); // builds array of apiKeys
  });
  $('.expand-all').click(function(e) {
    e.preventDefault();
    $('.api-user-settings').each(function() {
      $(this).slideDown();
    });
  });
  $('.collapse-all').click(function(e) {
    e.preventDefault();
    $('.api-user-settings').each(function() {
      $(this).slideUp();
    });
  });
  $('.api-user-settings input').on('change keyup', function() {
    enableLeavePrompt(); //window will now prompt for unsaved changes
  });
  $(document).on('change', '.api-user-settings input.color', function() { //binds change event to document for the selector input.color for objects appended to DOM after page load
    color = $(this).val();
    color = color.toUpperCase();
    $(this).val(color);
    if (color.length != 6 && color.length != 3) {
      color = 'cccccc';
      color = 'transparent';
    } else {
      color = "#" + color;
    }
    var colorBox = $(this).parent().find('.color-preview');
    if (colorBox.length == 0) { // Checks if color preview box exists, if not then create one
      $('<span class="fl color-preview"></span>').insertAfter(this);
      colorBox = $(this).parent().find('.color-preview');
    }
    colorBox.css('background-color', color);
  });
  $('input.color').each(function() { // Add color preview boxes next to all color fields
    $('<span class="fl color-preview"></span>').insertAfter(this);
    $(this).parent().find('input.color').trigger('change');
  });
  $(document).on('change', 'input.img-url', function() {
    var src = $(this).val();
    $(this).parent().find('.img-preview').attr('src', src);
  });
  $(document).on('click', '.api-user-dropdown', function(e) {
    e.preventDefault();
    var child = $(this).parent().find('.api-user-settings');
    child.slideToggle();
  })
  $(document).on("change keypress", '.display-name', function() {
    var text = $(this).val() + '<span class="toggle">+</span>';
    var element = $(this).parents('.api-user-settings').parent().find(
      '.api-user-dropdown h3');
    element.html(text);
  });
  $('#add-new-user').click(function(e) {
    e.preventDefault();
    enableLeavePrompt(); //window will now prompt for unsaved changes
    var apiKey = "";
    while (!isUniqueKey(apiKey, apiKeys) || apiKey == "") {
      apiKey = makeNewKey(); //generates a random 10-digit string of chars/numbers
    }
    apiKeys.push(apiKey); //once proven unique, add apiKey to array of apiKeys

    var newElement = '<div class="api-user-wrapper">';
    newElement +=
      '<a class="api-user-dropdown" href="#"><div class="api-user"><h3>New User<span class="toggle">+</span></h3></div></a>';
    newElement += '<div class="api-user-settings">';
    newElement +=
      '<a tabindex="-1" href="#" class="remove-user"><div>- Remove this user</div></a>';
    newElement += '<div class="clear"></div>';
    newElement += '<p>Display Name: <input name="' + apiKey +
      '-name" class="display-name name" type="text" value=""></p>';
    newElement += '<p>Username: <input name="' + apiKey +
      '-username" class="name" type="text" value=""></p>';
    newElement += '<p>API Key: <span class="api-key">' + apiKey +
      '</span></p><input class="api-key-value hidden" type="text" name="' +
      apiKey + '-api_key" value="' + apiKey + '">';
    newElement += '<input class="hidden num-images" value="0">';
    newElement +=
      '<a href="#" class="add-image"><div>Add an image</div></a>';
    newElement += '<input class="hidden num-colors" value="0">';
    newElement +=
      '<a href="#" class="add-color"><div>Add a color</div></a>';
    newElement += '<p>Additional settings - JSON</p>';
    newElement += '<textarea rows="6" name="' + apiKey +
      '-json_settings" class="json-settings">{}</textarea>';
    newElement += '</div>';
    newElement += '</div>';
    /*newElement +=      '<p>Header Banner Color: <span class="hex-prefix">#</span><input name="'+ apiKey +'-header_banner_color" class="color" type="text" value=""></p>';
    newElement +=      '<p>Logo image: <input name="'+ apiKey +'-logo_image" class="img-url" type="text" value=""><img class="img-preview" src=""></p>';*/
    $(newElement).insertBefore(this); //add new elements to DOM
    $('.collapse-all').trigger("click"); //fire click event for .collapse-all selector
    $('.api-user-wrapper').last().find('.api-user-dropdown').trigger(
      "click"); //fire click event to expand newly created .api-user-dropdown
    $(this).parents('.inner-content').find('.controls').removeClass(
      'hidden'); //show expand/collapse controls
  });
  $(document).on('click', '.add-image', function(e) {
    e.preventDefault();
    var apiKey = $(this).parent().find('.api-key-value').val();
    var num = $(this).parent().find('.num-images').val();
    num = parseInt(num);
    var newElement =
      '<p><a tabindex="-1" href="#" class="remove-image">-</a><span class="fl">Image ' +
      (num + 1) + ': </span><input name="' + apiKey + '-image' + (num +
        1) +
      '" class="fl img-url" type="text" value=""><img class="fl img-preview" src=""><div class="clear"></div></p>';
    $(newElement).insertBefore(this);
    $(this).parent().find('.num-images').val(num + 1);
  });
  $(document).on('click', '.add-color', function(e) {
    e.preventDefault();
    var apiKey = $(this).parent().find('.api-key-value').val();
    var num = $(this).parent().find('.num-colors').val();
    num = parseInt(num);
    var newElement =
      '<p><a href="#" class="remove-color">-</a><span class="fl">Color ' +
      (num + 1) +
      ': </span><span class="fl hex-prefix">#</span><input name="' +
      apiKey + '-color' + (num + 1) +
      '" class="fl color" type="text" value=""><div class="clear"></div></p>';
    $(newElement).insertBefore(this);
    $(this).parent().find('.num-colors').val(num + 1);
  });
  $(document).on('click', 'a.remove-image', function(e) {
    e.preventDefault();
    //var num = parseInt( $(this).parents('.api-user-settings').find('.num-images').val() );
    //$(this).parents('.api-user-settings').find('.num-images').val( num-1 ); // update number of images for this user
    $(this).parent().remove();
    enableLeavePrompt();
  });
  $(document).on('click', 'a.remove-color', function(e) {
    e.preventDefault();
    //var num = parseInt( $(this).parents('.api-user-settings').find('.num-colors').val() );
    //$(this).parents('.api-user-settings').find('.num-colors').val( num-1 );
    $(this).parent().remove();
    enableLeavePrompt();
  });
  $(document).on("click", ".remove-user", function(e) {
    e.preventDefault();
    var name = $(this).parents('.api-user-wrapper').find(
      '.api-user-dropdown .api-user h3').html();
    var n = name.search('<span');
    name = name.substring(0, n);
    var r = confirm("Are you sure you want to remove the user " + name +
      "?"); //displays prompt to guard against accidental deletions
    if (r == true) {
      // OK
      enableLeavePrompt(); //window will now prompt for unsaved changes
      $(this).parents('.api-user-wrapper').remove(); //delete the element and all of its descendants
    } else {
      // Cancel
    }
  });
  disableLeavePrompt(); //on document load, disable window prompt for unsaved changes

}); // end of document.ready()

function makeNewKey() {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function isUniqueKey(key, keys) {
  for (var i = 0; i < keys.length; i++) {
    if (key == keys[i]) {
      return false
    }
  };
  return true;
}

function enableLeavePrompt() {
  window.onbeforeunload = function(e) {
    return "Discard changes?";
  };
}

function disableLeavePrompt() {
  window.onbeforeunload = null;
}



$(document).ready(function() {
  $.mdc();



  //add Analytics click events

  $('.equation-tag a').click(function() {
    ga('send', 'event', 'link', 'click', 'lefthandside');
  });


  // add a border below
  $('.mdc-container:not(:has(#mdcsystem))').css('border-top',
    '1px solid #ddd');
  $('.mdc-container:last').css('border-bottom', '1px solid #ddd');

  var width = $(window).width();

  // tooltips
  $(".equation-icon, abbr, .tipp").tooltip();

  // fixes label-sub spacing if there's a radiogroup nearby
  $('.mdc-radiogroup').parent().find('.label-sub').css('margin',
    '0 0 5px 5px');

  //This puts the result box in the right place
  $(".mdc-result-box").each(function() {
    $(this).unwrap();
    $("#equation-results-container .equation-results-smaller").append($(
      this));
  });

  //This makes the equation details section at the bottom of the page functional
  $('.ef-nav-item').click(function() {
    $('.ef-nav-item').removeClass("selected");
    $(this).addClass("selected");


    $('.ef-content-item').addClass("hidden");
    $($(this).attr("href")).removeClass("hidden");
    $($(this).attr("href") + "-mob").removeClass("hidden");

    //dynamically updates url to the clicked details section without refreshing the page
    window.location.hash = $(this).attr("href");

  });



  $(window).scroll(function() {
    if (($(window).scrollTop() > ($(".equation-center").offset().top +
        $(".equation-header").height())) && $(window).width() > 1000 &&
      !$(".ie7")[0]) {
      $(".equation-results-smaller").css("position", "fixed");
      $(".equation-results-smaller").css("top", 0);

      if (($(".equation-results-smaller").offset().top + $(
          ".equation-results-smaller").height()) > (($(
            ".equation-center").height() - $(".equation-footer").height() -
          parseInt($(".equation-footer").css("padding-top"))) + $(
          ".equation-center").offset().top)) {
        $(".equation-results-smaller").css("position", "absolute");
        $(".equation-results-smaller").css("top", ($(".equation-center")
          .height() - $(".equation-footer").height() - parseInt($(
            ".equation-footer").css("padding-top"))) - $(
          ".equation-results-smaller").height() - $(
          ".equation-header").height());
      }
    } else {
      $(".equation-results-smaller").css("position", "relative");
      $(".equation-results-smaller").css("top", "0");
    }
  });

});


// ad refresh stuff


time2 = 1;
longstay2 = 1;
var resettimer2, longstaytimer2, analytics_calculated2;
analytics_calculated2 = 1;
adrefreshed2 = 1;

function adHookStartOff() {

  if (time2 == 0) {

    // // console.log('Ads Initially Refreshed');
    //if (analytics_calculated == 0) { // console.log( "ANALYTICS EVENT:  EQUATION CALCULATED "); }
    //analytics_calculated2 = 1;
    // googletag.pubads().refresh();
    //_gaq.push(['_trackEvent', 'Equation', 'Calculated, Ad Refreshed', '<?php the_title(); ?>']);
    //adrefreshed2=1;
    //time2 = 1;

    //clearTimeout(resettimer);

    resettimer = setTimeout(function() {
      time2 = 1;
      googletag.pubads().refresh();
      console.log('Time Up, Ads Can Refresh Again');
      adrefreshed2 = 1;
    }, 30000);
  }

  /*

  if (longstay2 == 0) {
  longstay2 = 1;

  longstaytimer2 = setTimeout(function(){
  longstay2 = 0;
  if (adrefreshed2==0) {
  //// console.log('Long Stay on Page, Ads Get Refreshed');
  //_gaq.push(['_trackEvent', 'Equation', 'Calculated, Ad Refreshed, Long Stay', '<?php the_title(); ?>']);
  googletag.pubads().refresh();
  }
  },120000);

  */

}



time = 1;
longstay = 1;
var resettimer, longstaytimer, analytics_calculated;
analytics_calculated = 1;
adrefreshed = 1;

function adHook() {
  //heap.track('Calc Resulted', {title: '<?php the_title(); ?>'});
dataLayer.push({'calc': 'resulted', 'event': 'calc-result', 'userId': uuid});
  if (time == 0) {

    // // console.log('Ads Initially Refreshed');
    //if (analytics_calculated == 0) { // console.log( "ANALYTICS EVENT:  EQUATION CALCULATED "); }
    //_gaq.push(['_trackEvent', 'Equation', 'Calculated, Ad Refreshed', '<?php the_title(); ?>']);
    //analytics_calculated = 1;
    /*
    googletag.pubads().refresh();
    adrefreshed=1;
    time = 1;
    }
    */

    clearTimeout(resettimer);

    resettimer = setTimeout(function() {
      time = 1;
      googletag.pubads().refresh();
      //// console.log('Time Up, Ads Can Refresh Again');
      adrefreshed = 1;
    }, 30000);

    /*
    if (longstay == 0) {
    longstay = 1;

    longstaytimer = setTimeout(function(){
    longstay = 0;
    if (adrefreshed==0) {
    //// console.log('Long Stay on Page, Ads Get Refreshed');
    //_gaq.push(['_trackEvent', 'Equation', 'Calculated, Ad Refreshed Long Stay', '<?php the_title(); ?>']);
    googletag.pubads().refresh();
    }
    },120000);

    */

  }

}


var countrycode;
var use_mdc_system_us = "true";
var url = document.URL.split('');
$(document).ready(function() {
  if (typeof getCookie("mdc_system_us") !== "undefined" && getCookie(
      "mdc_system_us") !== null) {
    use_mdc_system_us = getCookie("mdc_system_us");
  } else {
    countrycode = "<?php echo iptocountry($_SERVER['REMOTE_ADDR']); ?>";
    countrycode = countrycode.toLowerCase();
    if (countrycode != "us") use_mdc_system_us = "false";
    setFullCookie("mdc_system_us", use_mdc_system_us, 365);
  }

  if (use_mdc_system_us == "false") $("#mdcsystem").click();



});
//the rest of this is in the mdc.js logic under the mdc toggle click event
