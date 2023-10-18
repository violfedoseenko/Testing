const validateValue = (value) => {
	if (value > 0 && value < 100) return true
	else return false
}

module.exports = validateValue;
