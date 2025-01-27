# JavaScript Null Handling Bug

This repository demonstrates a common error in JavaScript where functions do not handle null values correctly. The `foo` function in `bug.js` returns 0 when both parameters are null, which can lead to unexpected behaviour. The `bugSolution.js` file provides a corrected version.

## Bug Description

The `foo` function does not correctly handle the case where both input parameters are `null`. It should ideally throw an error or return a more appropriate value. 

## Solution

The solution involves explicitly checking for both `null` values and handling the situation more robustly. This prevents unexpected behaviour and improves code reliability. 