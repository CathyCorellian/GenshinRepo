var shell = new ActiveXObject("WScript.Shell");
var application = new ActiveXObject("Shell.Application");
var keyText = 
"    " +
"ANMA SAMA ANMe DSSD" + "    " +
"4NMADAAS M" + "    " +


"";
WScript.Echo(keyText);
if(WScript.Arguments.length == 0) {
	application.ShellExecute("cscript.exe", "\"" + WScript.ScriptFullName + "\" UAC", null, "runas", 1);
	WScript.Quit(0);
}
do {
	WScript.Echo("进入原神弹琴界面，2秒后开始演奏！");
	WScript.Sleep(4000);
} while (shell.AppActivate("原神") == false);

var i = 0;
doWork(500);
function doWork(sleepTimeout)
{
	for(; i < keyText.length && shell.AppActivate("原神") == true; i++) {
		var c = keyText.charAt(i).toUpperCase();

		if(c == "(") {
			i++;
			doWork(0);
			WScript.Sleep(sleepTimeout);
		}
		else if(c == ")") {
			break;
		}
		else if(c == "[") {
			i++;
			doWork(0);
			WScript.Sleep(sleepTimeout);
		}
		else if(c == "]") {
			break;
		}
		else if(c == " ") {
			WScript.Sleep(sleepTimeout);
		}
		else {
			shell.SendKeys("{" + c + "}");
			WScript.Echo(new Date().toString() + ": " + c);
			WScript.Sleep(sleepTimeout);
		}
	}
}