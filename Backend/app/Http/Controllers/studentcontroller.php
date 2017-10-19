<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\mahasiswa;

class studentcontroller extends Controller
{
    function daftar(Request $req)
    {
        DB::beginTransaction();

        try {

            $this->validate($req, [
                'nama' => 'required'
            ]);

            $mahasiswa = new mahasiswa;
            $mahasiswa->nama = $req->input('nama');
            $mahasiswa->alamat = $req->input('alamat');

            $mahasiswa->save();

            DB::commit();

            return response()->json(['message' => 'Berhasil'], 201);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => 'Gagal:' + $e], 500);
        }
    }
    function update(Request $req, $id)
    {
        DB::beginTransaction();

        try {
            $mahasiswa = mahasiswa::find($id);
            $nama = $req->input('nama');
            $alamat = $req->input('alamat');
            $mahasiswa->save();
            DB::table('mahasiswas')
                ->where('id', $id)
                ->update(['nama' => $nama, 'alamat' => $alamat]);
            DB::commit();

            return response()->json(['message' => 'Update'], 201);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => 'Gagal:' + $e], 500);
        }
    }
}