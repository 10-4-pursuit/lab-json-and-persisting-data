const coolImage = require("..")

describe ("coolImage()", () => {
    test("should test the objects has expected keys", () => {
        coolImage() 
    const data = require("../data/coolImage.json")
    for (const item of data) {
        console.log(data);
    expect(item).toHaveProperty("imageId")
    expect(item).toHaveProperty("imageName")
    expect(item).toHaveProperty("imageUrl")
    expect(item).toHaveProperty("tags")
    expect(item).toHaveProperty("uploadDate")
    }
    })

    test("should test that values generated has correct data type", () => {
        coolImage()
        const data = require("../data/coolImage.json")
        for (const item of data) {
            expect(typeof item.imageId).toBe("string")
            expect(typeof item.imageName).toBe("string")
            expect(typeof item.imageUrl).toBe("string")
            expect(Array.isArray(item.tags)).toBe(true)
            expect(typeof item.uploadDate).toBe("string")
        }
     })
    
})

