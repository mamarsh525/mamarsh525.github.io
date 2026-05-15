---
title: "Research"
draft: false
author: ""
---

## Spore Weight Analysis

**GREAT Scholars Summer 2026**

I'm conducting research at UC Santa Cruz in the Gomez Lab under the mentorship of Dr. Marcella Gomez and Alexandra Nava. This project is supported by the GREAT Scholars program.

### Project Overview

This summer, I'm analyzing data related to bacterial spore germination: understanding how spores transition from a dormant to an active state. Spores are incredibly resilient and can survive harsh environmental conditions, then germinate when exposed to specific signals. Understanding this process has important applications in microbiology, food safety, and biotechnology.

### Research Goals

My mentor developed a Long Short-Term Memory (LSTM) machine learning model that predicts spore germination at each timestep using features like electrochemical potential, experimental conditions, and spore size. While this model achieves strong predictive performance, understanding *why* it makes certain predictions remains a challenge.

![ML Model](/ml-model.png)

My project focuses on two main aims:

**Aim 1: Weight Analysis on Timesteps**
I'm investigating how information from different timesteps contributes to the model's predictions. The goal is to understand whether the model relies primarily on recent measurements or whether earlier inputs continue to influence predictions: revealing whether germination is driven by immediate signals or accumulated changes over time.

**Aim 2: Weight Analysis on Features**
I'm analyzing which features (electrochemical potential, conditions, spore size, etc.) are most important for predicting germination, and how this importance varies across the time series.

### Skills & Tools Used

- Python programming and Jupyter Notebooks
- Data visualization (Matplotlib, Seaborn)
- Machine learning models (LSTM, RNN)
- Statistical analysis
- Data processing with Pandas and NumPy
