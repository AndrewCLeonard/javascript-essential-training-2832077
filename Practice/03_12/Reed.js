/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objects by calling their properties and using their methods in the console.
 */

class Reed {
	constructor(
		// PARAMETERS:
		// reed biography
		instrumentType,
		brand,
		model,
		serialNumber,
		purchaseDate,
		// soaking info
		soakLiquid,
		soakTime,
		// storage info
		storageMethod,
		storageTime,
		storageLocation,
		// usage info
		playedOnDate,
		timePlayed,
		rehearsalCount,
		concertCount,
		lifecycle // breaking in, active use, retired
	) {
		// PROPERTIES:
		this.instrumentType = instrumentType;
		this.brand = brand;
		this.model = model;
		this.serialNumber = serialNumber;
		this.purchaseDate = purchaseDate;
		this.soak = {
			liquid: soakLiquid,
			time: soakTime,
		};
		this.storage = {
			method: storageMethod,
			time: storageTime,
			location: storageLocation,
		};
		this.usage = {
			date: playedOnDate,
			minutes: timePlayed,
			rehearsals: rehearsalCount,
			concerts: concertCount,
			status: lifecycle,
		};
		// set starting numbers
		this.soak.time = 0;
		this.usage.minutes = 0;
		this.usage.rehearsals = 0;
		this.usage.concerts = 0;
		this.usage.status = "breaking in";
	}

	// METHODS:
	changePlayingTime(timePlayed) {
		this.usage.minutes = timePlayed;
	}
	changeLifecycleStatus(reedStatus) {
		this.usage.status = reedStatus;
	}
}

export default Reed;
