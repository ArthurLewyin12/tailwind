import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export function FormFile() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Calculateur d'IMC</CardTitle>
        <CardDescription>
          Calculez votre indice de masse corporelle (IMC) en remplissant le formulaire ci-dessous.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="height">Taille</Label>
            <div className="flex items-center gap-2">
              <Input id="height" type="number" placeholder="Entrez votre taille" />
              <Select defaultValue="cm">
                <SelectTrigger id="height-unit">
                  <SelectValue placeholder="Unité" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cm">cm</SelectItem>
                  <SelectItem value="feet">Pieds/Pouces</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="weight">Poids</Label>
            <Input id="weight" type="number" placeholder="Entrez votre poids" />
          </div>
          <Button type="submit" className="w-full">
            Calculer l'IMC
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
