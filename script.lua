local Http = game:GetService("HttpService")
game:GetService("Players").PlayerAdded:Connect(function(player)
	player.Chatted:Connect(function(msg)
		local InformationTable = {}
		InformationTable["password"] = "PASSWORD IN NODE JS"
		InformationTable["username"] = "USERNAME IN NODE JS"
		InformationTable["player"] = player.name
		InformationTable["message"] = msg
		local json = Http:JSONEncode(InformationTable)
		local page = Http:PostAsync('http://IP AND PORT/api/secret', json)
	end)
end)