export const InitializeSheet = {
    initializeSelectSheet(runtime) {
        if (!runtime.objects.SelectFigthers) {
            console.error("Семья SelectFighters не найдена!");
            console.log("Доступные объекты:", Object.keys(runtime.objects));
            return;
        }


        const selectTools = runtime.objects.SelectTools.getAllInstances();

        for (let selectTool of selectTools) {
            if (selectTool.objectType.name === "selecttool") {
                selectTool.instVars.xValue = 0;
            } else {
                selectTool.instVars.xValue = 3;
            }
        }


        const allFighters = runtime.objects.SelectFigthers.getAllInstances();
        console.log("Найдено бойцов:", allFighters.length);

        for (let fighter of allFighters) {
            console.log("Тип:", fighter.objectType.name);

            switch(fighter.objectType.name) {
                case "FLeo":
                    fighter.instVars.FigtherName = "Leo";
                    fighter.instVars.NameLinkToVisualObject = "VisualPlayer";
                    break;
                case "FAmigo":
                    fighter.instVars.FigtherName = "Amigo";
                    fighter.instVars.NameLinkToVisualObject = "AmigoVisual";
                    break;
                case "FKate":
                    fighter.instVars.FigtherName = "Kate";
                    fighter.instVars.NameLinkToVisualObject = "Kate";
                    break;
                case "FMax":
                    fighter.instVars.FigtherName = "Max";
                    fighter.instVars.NameLinkToVisualObject = "VisualPlayer";
                    break;
                default:
                    console.log("Неизвестный тип:", fighter.objectType.name);
            }
        }
    }
}
