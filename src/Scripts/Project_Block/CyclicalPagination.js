function ChangeIndex(index, pageAmount, change) {
	index = index + change;
	if (index < 0) {
		index = pageAmount - 1;
	}
	if (index >= pageAmount) {
		index = 0;
	}
	return index;
}

export { ChangeIndex };
