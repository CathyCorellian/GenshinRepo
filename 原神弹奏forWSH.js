/*
说明：
1. 打开原神的弹琴界面
2. 运行此程序
3. 回到原神界面
4. 可编辑keyText调整按键
*/

var shell = new ActiveXObject("WScript.Shell");
var application = new ActiveXObject("Shell.Application");
var keyText = "QWEQE WERWR ERTET RTYRY TYUTU  UYTUT YTRYR TRETE REWRW EWQEQ";

if(WScript.Arguments.length == 0)
{
	application.ShellExecute("cscript.exe", "\"" + WScript.ScriptFullName + "\" UAC", null, "runas", 1);
	WScript.Quit(0);
}
do {
	WScript.Echo("请进入原神弹琴界面，2秒后开始演奏！");
	WScript.Sleep(2000);
} while (shell.AppActivate("原神") == false);

for(var i = 0; i < keyText.length; i++)
{
	var c = keyText.charAt(i);
	if(c == " ")
	{
		WScript.Sleep(512);
	}
	else
	{
		shell.SendKeys("{" + c + "}");
		WScript.Sleep(256);
	}
}


