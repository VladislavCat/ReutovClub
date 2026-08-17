export const SpawnManager = {
    // Основной метод спавна на точке
    spawnOnPoint(runtime, sourceSprite, targetType, layerName, pointIndex = 1) {

        const pointX = sourceSprite.getImagePointX(pointIndex);
        const pointY = sourceSprite.getImagePointY(pointIndex);

        const targetObj = runtime.objects[targetType];
        if (!targetObj) {
            console.warn(`Объект "${targetType}" не найден`);
            return null;
        }

        const newSprite = targetObj.createInstance(layerName, pointX, pointY);
    

        return newSprite;
	},

	spawnWithFlipX(runtime, sourceSprite, targetType, layerName, pointIndex = 2) {
    // Координаты
    const pointX = sourceSprite.getImagePointX(pointIndex);
    const pointY = sourceSprite.getImagePointY(pointIndex);
    
    // Создаём объект
    const targetObj = runtime.objects[targetType];
    if (!targetObj) {
        console.warn(`Объект "${targetType}" не найден`);
        return null;
    }
    
    const newSprite = targetObj.createInstance(layerName, pointX, pointY);
    if (!newSprite) return null;
    
    newSprite.width = -newSprite.width;
    
    return newSprite;
}
}