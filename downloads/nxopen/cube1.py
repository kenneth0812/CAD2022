import math
import NXOpen
import NXOpen.Annotations
import NXOpen.Features
import NXOpen.GeometricUtilities
import NXOpen.Preferences
 
def main() : 
 
    theUI = NXOpen.UI.GetUI()
    theMsgBox = theUI.NXMessageBox
    theMsgBox.Show("簡要說明", NXOpen.NXMessageBox.DialogType.Information,"以下流程將建立一個簡單的長方體")
    theSession  = NXOpen.Session.GetSession()
    # 以下利用 ListingWindow 列出相關資訊, 可用於程式除錯
    theLw = theSession.ListingWindow
    # 開啟 console 將資料印出
    theLw.Open()
    theLw.WriteLine("theSession 變數目前為: "+str(theSession))
    # 建立新零件檔案
    fileNew1 = theSession.Parts.FileNew()
    fileNew1.TemplateFileName = "model-plain-1-mm-template.prt"
    fileNew1.ApplicationName = "ModelTemplate"
    fileNew1.Units = NXOpen.Part.Units.Millimeters
    fileNew1.TemplatePresentationName = "Model"
    fileNew1.NewFileName = "E:\\nxopen_record\\model1.prt"
    fileNew1.MakeDisplayedPart = True
    nXObject1 = fileNew1.Commit()
    # 建立工作零件
    workPart = theSession.Parts.Work
    # ----------------------------------------------
    #   Menu: Insert->Sketch...
    # ----------------------------------------------
    sketchInPlaceBuilder1 = workPart.Sketches.CreateSketchInPlaceBuilder2(NXOpen.Sketch.Null)
    origin1 = NXOpen.Point3d(0.0, 0.0, 0.0)
    normal1 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    plane1 = workPart.Planes.CreatePlane(origin1, normal1, NXOpen.SmartObject.UpdateOption.WithinModeling)
    sketchInPlaceBuilder1.PlaneReference = plane1
    unit1 = workPart.UnitCollection.FindObject("MilliMeter")
    sketchAlongPathBuilder1 = workPart.Sketches.CreateSketchAlongPathBuilder(NXOpen.Sketch.Null)
    datumAxis1 = workPart.Datums.FindObject("DATUM_CSYS(0) X axis")
    direction1 = workPart.Directions.CreateDirection(datumAxis1, NXOpen.Sense.Forward, NXOpen.SmartObject.UpdateOption.WithinModeling)
    datumPlane1 = workPart.Datums.FindObject("DATUM_CSYS(0) XY plane")
    datumCsys1 = workPart.Features.FindObject("DATUM_CSYS(0)")
    point1 = datumCsys1.FindObject("POINT 1")
    xform1 = workPart.Xforms.CreateXformByPlaneXDirPoint(datumPlane1, direction1, point1, NXOpen.SmartObject.UpdateOption.WithinModeling, 0.625, False, False)
    cartesianCoordinateSystem1 = workPart.CoordinateSystems.CreateCoordinateSystem(xform1, NXOpen.SmartObject.UpdateOption.WithinModeling)
    sketchInPlaceBuilder1.Csystem = cartesianCoordinateSystem1
    origin3 = NXOpen.Point3d(0.0, 0.0, 0.0)
    normal3 = NXOpen.Vector3d(0.0, 0.0, 1.0)
    plane3 = workPart.Planes.CreatePlane(origin3, normal3, NXOpen.SmartObject.UpdateOption.WithinModeling)
    plane3.SetMethod(NXOpen.PlaneTypes.MethodType.Coincident)
    geom2 = [NXOpen.NXObject.Null] * 1
    geom2[0] = datumPlane1
    plane3.SetGeometry(geom2)
    plane3.SetAlternate(NXOpen.PlaneTypes.AlternateType.One)
    plane3.Evaluate()
    # ----------------------------------------------
    #   Menu: Insert->Sketch Curve->Rectangle...
    # ----------------------------------------------
    nXObject1 = sketchInPlaceBuilder1.Commit()
    sketch1 = nXObject1
    feature1 = sketch1.Feature
    sketch1.Activate(NXOpen.Sketch.ViewReorient.TrueValue)
    sketchInPlaceBuilder1.Destroy()
    sketchAlongPathBuilder1.Destroy()
    plane3.DestroyPlane()
    # ----------------------------------------------
    # Creating rectangle using By 2 Points method 
    # ----------------------------------------------
    startPoint1 = NXOpen.Point3d(-52.0, 42.0, 0.0)
    endPoint1 = NXOpen.Point3d(44.0, 42.0, 0.0)
    line1 = workPart.Curves.CreateLine(startPoint1, endPoint1)
    startPoint2 = NXOpen.Point3d(44.0, 42.0, 0.0)
    endPoint2 = NXOpen.Point3d(44.0, -42.0, 0.0)
    line2 = workPart.Curves.CreateLine(startPoint2, endPoint2)
    startPoint3 = NXOpen.Point3d(44.0, -42.0, 0.0)
    endPoint3 = NXOpen.Point3d(-52.0, -42.0, 0.0)
    line3 = workPart.Curves.CreateLine(startPoint3, endPoint3)
    startPoint4 = NXOpen.Point3d(-52.0, -42.0, 0.0)
    endPoint4 = NXOpen.Point3d(-52.0, 42.0, 0.0)
    line4 = workPart.Curves.CreateLine(startPoint4, endPoint4)
    theSession.ActiveSketch.AddGeometry(line1, NXOpen.Sketch.InferConstraintsOption.InferNoConstraints)
    theSession.ActiveSketch.AddGeometry(line2, NXOpen.Sketch.InferConstraintsOption.InferNoConstraints)
    theSession.ActiveSketch.AddGeometry(line3, NXOpen.Sketch.InferConstraintsOption.InferNoConstraints)
    theSession.ActiveSketch.AddGeometry(line4, NXOpen.Sketch.InferConstraintsOption.InferNoConstraints)
    theSession.ActiveSketch.Update()
    theSession.Preferences.Sketch.AutoDimensionsToArcCenter = True
     
    geoms1 = [NXOpen.SmartObject.Null] * 4
    geoms1[0] = line1
    geoms1[1] = line2
    geoms1[2] = line3
    geoms1[3] = line4
    theSession.ActiveSketch.UpdateConstraintDisplay(geoms1)
    # ----------------------------------------------
    #   Menu: File->Finish Sketch
    # ----------------------------------------------
    sketch2 = theSession.ActiveSketch
    # ----------------------------------------------
    #   Menu: Insert->Design Feature->Extrude...
    # ----------------------------------------------
    extrudeBuilder1 = workPart.Features.CreateExtrudeBuilder(NXOpen.Features.Feature.Null)
    section1 = workPart.Sections.CreateSection(0.0095, 0.01, 0.5)
    extrudeBuilder1.Section = section1
    extrudeBuilder1.AllowSelfIntersectingSection(True)
    unit2 = extrudeBuilder1.Draft.FrontDraftAngle.Units
    features1 = [NXOpen.Features.Feature.Null] * 1
    sketchFeature1 = feature1
    features1[0] = sketchFeature1
    curveFeatureRule1 = workPart.ScRuleFactory.CreateRuleCurveFeature(features1)
    section1.AllowSelfIntersection(True)
    rules1 = [None] * 1
    rules1[0] = curveFeatureRule1
    helpPoint1 = NXOpen.Point3d(-52.0, 18.604, 3.553e-15)
    section1.AddToSection(rules1, line4, NXOpen.NXObject.Null, NXOpen.NXObject.Null, helpPoint1, NXOpen.Section.Mode.Create, False)
    direction2 = workPart.Directions.CreateDirection(sketch2, NXOpen.Sense.Forward, NXOpen.SmartObject.UpdateOption.WithinModeling)
    extrudeBuilder1.Direction = direction2
    extrudeBuilder1.Limits.EndExtend.Value.RightHandSide = "50"
    extrudeBuilder1.ParentFeatureInternal = False
    feature2 = extrudeBuilder1.CommitFeature()
    # ----------------------------------------------
    #   Menu: Tools->Journal->Stop Recording
    # ----------------------------------------------
     
if __name__ == '__main__':
    main()