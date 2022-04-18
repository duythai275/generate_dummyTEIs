# Generating Dummy Data

Requirements: NodeJS\
Installation: Run `npm install`

## Overview

Generating TEIs, Enrollments and Events following the defined templates. Along with the template data, there is report table with columns are orgUnits, rows are period. This report provied number of TEIs for specified orgUnit in the period. The script will generate as many as TEIs following the report.

## `config.js`

- destinationURL: The URL of the instance, where the data is importing to,
- destinationAuthorization: Use `btoa(username:password)` to get the authoration

## Workflow

### Run `node generatingData.js`

This script generates TEIs with Enrollments and Events base on the template data and following the report.\ 
The report name can be editted in this script file.\ 
In order to update the template data, edit in `getTemplate.js`.\
All TEIs are stored in `data` directory.

### Run `node importingData.js`

The script will import the transformed data. Then return the result of the importing process. You can check the results in `results` directory in order to fix any error occured after importing. For example: the program is not assigned to some orgUnits in the destination instance.
