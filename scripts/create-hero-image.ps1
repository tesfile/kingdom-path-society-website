$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

$width = 1600
$height = 1050
$bitmap = New-Object System.Drawing.Bitmap($width, $height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias

$rect = New-Object System.Drawing.Rectangle(0, 0, $width, $height)
$bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  $rect,
  [System.Drawing.Color]::FromArgb(255, 13, 33, 51),
  [System.Drawing.Color]::FromArgb(255, 36, 95, 132),
  22
)
$graphics.FillRectangle($bgBrush, $rect)

function New-SolidBrush($r, $g, $b, $a = 255) {
  return New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb($a, $r, $g, $b))
}

function New-Pen($r, $g, $b, $a = 255, $w = 1) {
  return New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb($a, $r, $g, $b), $w)
}

$gold = New-SolidBrush 255 208 84 230
$goldSoft = New-SolidBrush 255 226 138 80
$whiteSoft = New-SolidBrush 255 255 255 55
$mist = New-SolidBrush 238 245 251 210
$navyDark = New-SolidBrush 13 33 51 230
$navyMid = New-SolidBrush 31 67 90 220
$pathBrush = New-SolidBrush 255 240 191 205
$shadow = New-SolidBrush 13 33 51 90

for ($i = 0; $i -lt 11; $i++) {
  $x = 60 + ($i * 150)
  $y = 120 + ([Math]::Sin($i) * 26)
  $graphics.FillEllipse($whiteSoft, $x, $y, 180, 54)
}

$graphics.FillEllipse($goldSoft, 1110, 120, 310, 310)
$graphics.FillEllipse($gold, 1172, 182, 186, 186)

$crossPen = New-Pen 255 240 191 160 18
$graphics.DrawLine($crossPen, 1210, 360, 1210, 545)
$graphics.DrawLine($crossPen, 1138, 422, 1282, 422)

$hillBrush1 = New-SolidBrush 17 49 73 240
$hillBrush2 = New-SolidBrush 31 67 90 235
$graphics.FillEllipse($hillBrush2, -260, 590, 850, 420)
$graphics.FillEllipse($hillBrush1, 360, 560, 1140, 500)
$graphics.FillEllipse($navyDark, 980, 610, 840, 430)

$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$path.AddBezier(650, 1050, 740, 890, 820, 760, 930, 632)
$path.AddBezier(930, 632, 990, 565, 1030, 508, 1074, 450)
$path.AddBezier(1074, 450, 1004, 548, 954, 635, 920, 744)
$path.AddBezier(920, 744, 888, 842, 878, 948, 880, 1050)
$path.CloseFigure()
$graphics.FillPath($pathBrush, $path)

$graphics.FillEllipse($shadow, 250, 840, 500, 96)
$graphics.FillEllipse($shadow, 760, 802, 380, 70)

function Draw-Person($g, $x, $y, $scale, $bodyBrush, $headBrush) {
  $head = [int](38 * $scale)
  $bodyW = [int](58 * $scale)
  $bodyH = [int](112 * $scale)
  $g.FillEllipse($headBrush, [int]($x - ($head / 2)), [int]($y - $bodyH - $head - 8), $head, $head)
  $g.FillRectangle($bodyBrush, [int]($x - ($bodyW / 2)), [int]($y - $bodyH), $bodyW, $bodyH)
  $g.FillEllipse($bodyBrush, [int]($x - ($bodyW / 2)), [int]($y - $bodyH - 12), $bodyW, [int](34 * $scale))
  $legPen = New-Pen 13 33 51 230 ([int](12 * $scale))
  $g.DrawLine($legPen, [int]($x - 12 * $scale), $y, [int]($x - 18 * $scale), [int]($y + 70 * $scale))
  $g.DrawLine($legPen, [int]($x + 12 * $scale), $y, [int]($x + 18 * $scale), [int]($y + 70 * $scale))
  $armPen = New-Pen 255 226 138 180 ([int](8 * $scale))
  $g.DrawLine($armPen, [int]($x - $bodyW / 2), [int]($y - $bodyH + 22 * $scale), [int]($x - $bodyW), [int]($y - $bodyH + 78 * $scale))
  $g.DrawLine($armPen, [int]($x + $bodyW / 2), [int]($y - $bodyH + 22 * $scale), [int]($x + $bodyW), [int]($y - $bodyH + 78 * $scale))
}

Draw-Person $graphics 370 825 1.15 $navyDark $mist
Draw-Person $graphics 455 840 0.9 $navyMid $mist
Draw-Person $graphics 530 858 0.72 $navyDark $mist
Draw-Person $graphics 890 790 0.95 $navyMid $mist
Draw-Person $graphics 960 805 0.78 $navyDark $mist

$handPen = New-Pen 255 208 84 210 10
$graphics.DrawArc($handPen, 600, 665, 120, 80, 15, 155)
$graphics.DrawArc($handPen, 704, 663, 120, 82, 20, 150)

$linePen = New-Pen 255 240 191 105 3
for ($j = 0; $j -lt 5; $j++) {
  $graphics.DrawBezier(
    $linePen,
    1180 + ($j * 16),
    535 + ($j * 8),
    1060 + ($j * 8),
    615 + ($j * 18),
    965 + ($j * 6),
    710 + ($j * 16),
    835 + ($j * 9),
    855 + ($j * 12)
  )
}

$outDir = Join-Path $PSScriptRoot "..\public\images"
New-Item -ItemType Directory -Force $outDir | Out-Null
$outFile = Join-Path $outDir "kingdom-path-hope.png"
$bitmap.Save($outFile, [System.Drawing.Imaging.ImageFormat]::Png)

$graphics.Dispose()
$bitmap.Dispose()
$bgBrush.Dispose()
$gold.Dispose()
$goldSoft.Dispose()
$whiteSoft.Dispose()
$mist.Dispose()
$navyDark.Dispose()
$navyMid.Dispose()
$pathBrush.Dispose()
$shadow.Dispose()
$hillBrush1.Dispose()
$hillBrush2.Dispose()
$crossPen.Dispose()
$linePen.Dispose()

Write-Output "Created $outFile"
